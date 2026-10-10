import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import Productos from './Productos';

// Importamos el hook para poder simularlo
import * as useFetchModule from '../hooks/useFetch';

vi.mock('../hooks/useFetch', () => ({
  useFetch: vi.fn()
}));

describe('Pruebas del componente Productos', () => {
  
  it('debe actualizar el estado de búsqueda al escribir en el input', async () => {
    // 1. Configuramos el Mock para que devuelva un producto falso y no falle
    useFetchModule.useFetch.mockReturnValue({
      data: [{ id: 'CN001', nombre: 'Plan de Prueba', duracion: '1 mes', precio: 10000, img: 'test.png' }],
      loading: false,
      error: null
    });

    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Productos />
      </MemoryRouter>
    );

    // 2. Buscamos la barra de búsqueda por su texto (placeholder)
    const inputBusqueda = screen.getByPlaceholderText(/Buscar por nombre o código/i);

    // 3. Simulamos al usuario escribiendo "Deportivo" (Prueba de Estado)
    await user.type(inputBusqueda, 'Deportivo');

    // 4. Verificamos que el componente guardó correctamente lo que escribimos
    expect(inputBusqueda.value).toBe('Deportivo');
  });

});