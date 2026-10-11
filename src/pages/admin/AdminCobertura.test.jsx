import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router';

// Vistas estáticas
import DashboardAdmin from './DashboardAdmin';
import AdminLayout from './AdminLayout';
import CatalogoAdmin from './CatalogoAdmin';
import CitasAdmin from './CitasAdmin';
import PerfilAdmin from './PerfilAdmin';
import ReportesAdmin from './ReportesAdmin';
import UsuarioAdmin from './UsuarioAdmin';

// Vistas dinámicas
import EditarCatalogoAdmin from './EditarCatalogoAdmin';
import EditarUsuarioAdmin from './EditarUsuarioAdmin';
import MostrarCatalogoAdmin from './MostrarCatalogoAdmin';
import MostrarUsuarioAdmin from './MostrarUsuarioAdmin';

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
    user: { email: 'admin@clinica.cl', rol: 'Administrador' },
    logout: vi.fn(),
  }),
}));

describe('Cobertura Exhaustiva de Vistas Administrativas', () => {
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renderiza las vistas estáticas y ejecuta AdminLayout', () => {
    render(<MemoryRouter><AdminLayout /></MemoryRouter>);
    const btnCerrarSesion = screen.getByText(/Cerrar Sesión/i);
    fireEvent.click(btnCerrarSesion);

    // Restauramos los renders que borré por accidente
    render(<MemoryRouter><DashboardAdmin /></MemoryRouter>);
    render(<MemoryRouter><CatalogoAdmin /></MemoryRouter>);
    render(<MemoryRouter><CitasAdmin /></MemoryRouter>);
    render(<MemoryRouter><PerfilAdmin /></MemoryRouter>);
    render(<MemoryRouter><ReportesAdmin /></MemoryRouter>);
    render(<MemoryRouter><UsuarioAdmin /></MemoryRouter>);
  });

  it('ejecuta las vistas dinámicas de Usuario', () => {
    const mockUsuario = { id: 1, nombre: 'Juan', correo: 'juan@cl.cl', rol: 'Paciente' };
    
    render(
      <MemoryRouter initialEntries={[{ pathname: '/editar', state: { usuario: mockUsuario } }]}>
        <EditarUsuarioAdmin />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByRole('combobox', { name: /Asignar Nuevo Rol/i }), { target: { value: 'Administrador' } });
    fireEvent.click(screen.getByRole('button', { name: /Actualizar Rol/i }));
    fireEvent.click(screen.getByRole('button', { name: /Cancelar/i }));

    // Recuperamos la vista Mostrar
    render(
      <MemoryRouter initialEntries={[{ pathname: '/mostrar', state: { usuario: mockUsuario } }]}>
        <MostrarUsuarioAdmin />
      </MemoryRouter>
    );
  });

  it('ejecuta las vistas dinámicas de Catálogo', () => {
    const mockServicio = { id: 'C01', nombre: 'Plan', descripcion: 'Desc', precio: 1000, imagen: '' };

    render(
      <MemoryRouter initialEntries={[{ pathname: '/editar-cat', state: { servicio: mockServicio } }]}>
        <EditarCatalogoAdmin />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Nombre del Servicio/i), { target: { value: 'Plan Modificado' } });
    fireEvent.click(screen.getByRole('button', { name: /Actualizar Servicio/i }));
    fireEvent.click(screen.getByRole('button', { name: /Cancelar/i }));

    // Recuperamos la vista Mostrar
    render(
      <MemoryRouter initialEntries={[{ pathname: '/mostrar-cat', state: { servicio: mockServicio } }]}>
        <MostrarCatalogoAdmin />
      </MemoryRouter>
    );
  });
});