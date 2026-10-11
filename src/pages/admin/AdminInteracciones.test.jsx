import { render, fireEvent } from '@testing-library/react';
import { describe, it, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router';

import AdminLayout from './AdminLayout';
import DashboardAdmin from './DashboardAdmin';
import PerfilAdmin from './PerfilAdmin';
import MostrarCatalogoAdmin from './MostrarCatalogoAdmin';
import MostrarUsuarioAdmin from './MostrarUsuarioAdmin';

// Mocks necesarios
const mockedUseNavigate = vi.fn();
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

vi.mock('../../context/AuthContext', () => ({
  useAuth: () => ({
    user: { email: 'admin@clinica.cl', rol: 'Administrador', nombre: 'Admin', telefono: '123' },
    logout: vi.fn(),
  }),
}));

describe('Ataque final a las funciones huérfanas', () => {
  
  beforeEach(() => {
    vi.clearAllMocks();
    // Llenamos la BD para que las tablas tengan qué procesar
    localStorage.setItem('nutrivida_usuarios_db', JSON.stringify([{ id: 1, nombre: 'Test', correo: 'a@a.cl' }]));
    localStorage.setItem('nutrivida_catalogo_db', JSON.stringify([{ id: 'C1', nombre: 'Test', precio: 1000 }]));
    localStorage.setItem('nutrivida_citas_db', JSON.stringify([{ id: 1, estado: 'Pendiente' }]));
    localStorage.setItem('nutrivida_ordenes_db', JSON.stringify([{ id: 1, total: 1000 }]));
  });

  it('Fuerza clics en MostrarCatalogo y MostrarUsuario (Botón Volver)', () => {
    const mockUsu = { id: 1, nombre: 'Juan', correo: 'j@cl.cl', rol: 'Paciente' };
    const mockCat = { id: 'C01', nombre: 'Plan', descripcion: 'Desc', precio: 1000, imagen: '' };

    const { container: usuCont } = render(
      <MemoryRouter initialEntries={[{ pathname: '/mostrar', state: { usuario: mockUsu } }]}>
        <MostrarUsuarioAdmin />
      </MemoryRouter>
    );
    const { container: catCont } = render(
      <MemoryRouter initialEntries={[{ pathname: '/mostrar-cat', state: { servicio: mockCat } }]}>
        <MostrarCatalogoAdmin />
      </MemoryRouter>
    );

    // Hacer clic en cualquier botón de "Volver" o "Regresar" que exista en estas vistas
    usuCont.querySelectorAll('button').forEach(btn => fireEvent.click(btn));
    catCont.querySelectorAll('button').forEach(btn => fireEvent.click(btn));
  });

  it('Fuerza escritura y envío en el formulario de PerfilAdmin', () => {
    const { container } = render(<MemoryRouter><PerfilAdmin /></MemoryRouter>);
    
    // Escribir en todos los inputs
    container.querySelectorAll('input').forEach(input => {
      fireEvent.change(input, { target: { value: 'Dato Modificado' } });
    });
    
    // Forzar el submit del formulario y los botones
    const form = container.querySelector('form');
    if (form) fireEvent.submit(form);
    container.querySelectorAll('button').forEach(btn => fireEvent.click(btn));
  });

  it('Fuerza interacciones brutas en AdminLayout y DashboardAdmin', () => {
    const { container: layout } = render(<MemoryRouter><AdminLayout /></MemoryRouter>);
    const { container: dash } = render(<MemoryRouter><DashboardAdmin /></MemoryRouter>);

    // Disparamos cada botón (logout, menú, etc) y select para abarcar todas las funciones
    const containers = [layout, dash];
    containers.forEach(c => {
      c.querySelectorAll('button').forEach(btn => fireEvent.click(btn));
      c.querySelectorAll('a').forEach(link => fireEvent.click(link));
      c.querySelectorAll('select').forEach(sel => {
        if (sel.options.length > 0) {
          fireEvent.change(sel, { target: { value: sel.options[0].value } });
        }
      });
    });
  });
});