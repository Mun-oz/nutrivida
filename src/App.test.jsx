import { render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import App from '../../nutrividaa/src/App';

// Simula la API fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { id: 'CN001', nombre: 'Plan Control Metabólico', duracion: '1 mes', precio: 45000, img: 'metabolismo.png' }
    ]),
  })
);

describe('Pruebas de Integración de todas las rutas exactas', () => {
  
  // Se agrega las rutas del blog
  const rutasPublicas = [
    '/', 
    '/nosotros', 
    '/blog', 
    '/blog-detalle-1',
    '/blog-detalle-2',
    '/contacto', 
    '/login', 
    '/registro', 
    '/agendar'
  ];

  rutasPublicas.forEach((ruta) => {
    it(`debe renderizar la vista pública en la ruta: ${ruta}`, () => {
      const { container } = render(
        <MemoryRouter initialEntries={[ruta]}>
          <App />
        </MemoryRouter>
      );
      expect(container).toBeTruthy();
    });
  });

  it('debe renderizar "/productos" y esperar a que cargue el catálogo', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/productos']}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(container.innerHTML).toContain('Plan Control Metabólico');
    });
  });

  const rutasAdmin = [
    '/admin/home',
    '/admin/catalogo',
    '/admin/catalogo/nuevo',
    '/admin/catalogo/editar',
    '/admin/catalogo/mostrar',
    '/admin/usuario',
    '/admin/usuario/nuevo',
    '/admin/usuario/editar',
    '/admin/usuario/mostrar'
  ];

  rutasAdmin.forEach((ruta) => {
    it(`debe renderizar la vista de administrador en la ruta: ${ruta}`, () => {
      const { container } = render(
        <MemoryRouter initialEntries={[ruta]}>
          <App />
        </MemoryRouter>
      );
      expect(container).toBeTruthy();
    });
  });
});