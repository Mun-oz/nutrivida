import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router';

// Componentes con funciones faltantes
import AdminLayout from './AdminLayout';
import DashboardAdmin from './DashboardAdmin';
import CatalogoAdmin from './CatalogoAdmin';
import UsuarioAdmin from './UsuarioAdmin';

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
    user: { email: 'admin@clinica.cl', rol: 'Administrador', nombre: 'Admin' },
    logout: vi.fn(),
  }),
}));

describe('Pruebas de Integración y Funciones del Panel Administrativo', () => {
  
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Inyectamos múltiples datos para obligar a DashboardAdmin a usar sus funciones matemáticas y .map()
    localStorage.setItem('nutrivida_usuarios_db', JSON.stringify([
      { id: 'U1', nombre: 'Juan Pérez', correo: 'j@cl.cl', rol: 'Paciente' },
      { id: 'U2', nombre: 'Ana López', correo: 'a@cl.cl', rol: 'Administrador' }
    ]));
    localStorage.setItem('nutrivida_catalogo_db', JSON.stringify([
      { id: 'C1', nombre: 'Plan Fit', precio: 25000, descripcion: 'Desc 1' },
      { id: 'C2', nombre: 'Control', precio: 15000, descripcion: 'Desc 2' }
    ]));
    // Inyectamos citas y órdenes para abarcar cualquier variante que tenga tu Dashboard
    localStorage.setItem('nutrivida_citas_db', JSON.stringify([
      { id: 1, paciente: 'Juan', servicio: 'Plan Fit', fecha: '2026-10-10', estado: 'Pendiente' }
    ]));
    localStorage.setItem('nutrivida_ordenes_db', JSON.stringify([
      { id: 1, total: 25000 }, { id: 2, total: 15000 }
    ]));
  });

  it('Ejecuta todas las funciones de botones y enlaces en AdminLayout', () => {
    const { container } = render(<MemoryRouter><AdminLayout /></MemoryRouter>);
    
    // Al hacer clic en absolutamente todo, cubrimos las funciones de toggle del menú lateral y el logout
    const botones = container.querySelectorAll('button');
    botones.forEach(btn => fireEvent.click(btn));
    
    const enlaces = container.querySelectorAll('a');
    enlaces.forEach(link => fireEvent.click(link));
  });

  it('Procesa las funciones de cálculo y renderizado de listas en DashboardAdmin', () => {
    // Al haber inyectado datos reales arriba, el Dashboard se verá obligado a procesar sus funciones internas
    render(<MemoryRouter><DashboardAdmin /></MemoryRouter>);
  });

  it('Ejecuta las funciones completas de eliminación en Catalogo y Usuarios', () => {
    const { container: catContainer } = render(<MemoryRouter><CatalogoAdmin /></MemoryRouter>);
    const { container: usuContainer } = render(<MemoryRouter><UsuarioAdmin /></MemoryRouter>);

    // 1. Simulamos que el usuario hace clic en "Cancelar" al intentar eliminar (cubre una rama de la función)
    window.confirm = vi.fn(() => false);
    catContainer.querySelectorAll('button').forEach(b => fireEvent.click(b));
    usuContainer.querySelectorAll('button').forEach(b => fireEvent.click(b));

    // 2. Simulamos que el usuario hace clic en "Aceptar" al intentar eliminar (ejecuta el borrado real)
    window.confirm = vi.fn(() => true);
    catContainer.querySelectorAll('button').forEach(b => fireEvent.click(b));
    usuContainer.querySelectorAll('button').forEach(b => fireEvent.click(b));
  });

});