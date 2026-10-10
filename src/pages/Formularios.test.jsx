import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import Contacto from './Contacto';
import NuevoCatalogoAdmin from './admin/NuevoCatalogoAdmin';

window.alert = vi.fn();
const mockedUseNavigate = vi.fn();

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

describe('Pruebas de Formularios Secundarios', () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Formulario de Contacto', () => {
    it('debe enviar el mensaje y mostrar alerta de éxito', async () => {
      const user = userEvent.setup();
      render(<MemoryRouter><Contacto /></MemoryRouter>);

      // Llenamos todos los campos del nuevo formulario
      await user.type(screen.getByLabelText('Nombre Completo:'), 'Marcelo Muñoz');
      await user.type(screen.getByLabelText('Teléfono:'), '+56912345678');
      await user.type(screen.getByLabelText('Correo Electrónico:'), 'marcelo@ejemplo.com');
      
      const selectAsunto = screen.getByLabelText('Asunto:');
      await user.selectOptions(selectAsunto, 'Dudas sobre planes');

      await user.type(screen.getByLabelText('Comentario:'), 'Consulta sobre plan deportivo');
      
      await user.click(screen.getByText('Enviar Mensaje'));

      expect(window.alert).toHaveBeenCalledWith('¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.');
    });
  });

  describe('Formulario de Nuevo Servicio Admin', () => {
    it('debe guardar el servicio y redirigir al catálogo', async () => {
      const user = userEvent.setup();
      render(<MemoryRouter><NuevoCatalogoAdmin /></MemoryRouter>);

      await user.type(screen.getByLabelText('Nombre del Servicio:'), 'Plan Nutricional de Prueba');
      await user.type(screen.getByLabelText('Descripción:'), 'Descripción detallada del plan');
      await user.type(screen.getByLabelText('Precio (CLP):'), '25000');
      
      await user.click(screen.getByText('Guardar Servicio'));

      expect(window.alert).toHaveBeenCalledWith('Servicio guardado exitosamente.');
      expect(mockedUseNavigate).toHaveBeenCalledWith('/admin/catalogo');
    });
  });

});