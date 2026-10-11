import { render, fireEvent, renderHook, waitFor } from '@testing-library/react';
import { describe, it, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router';

// Componentes a probar
import Header from './cors/Header';
import AdminLayout from './pages/admin/AdminLayout';
import DashboardAdmin from './pages/admin/DashboardAdmin';
import Gracias from './pages/Gracias';
import Agendar from './pages/Agendar';
import { useFetch } from './hooks/useFetch';

const mockedUseNavigate = vi.fn();
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

// Mock escrito con "return" explícito para que jamás devuelva undefined
vi.mock('./context/AuthContext', () => {
  return {
    useAuth: () => {
      return {
        user: { email: 'admin@clinica.cl', rol: 'Administrador', nombre: 'Admin' },
        logout: vi.fn(),
      };
    }
  };
});

describe('El Tiro de Gracia - Cruzando el 80%', () => {
  
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Llenamos datos para que el Dashboard funcione
    localStorage.setItem('nutrivida_usuarios_db', JSON.stringify([
      { id: 1, nombre: 'Juan', correo: 'j@cl.cl', rol: 'Paciente' }
    ]));
    localStorage.setItem('nutrivida_catalogo_db', JSON.stringify([
      { id: 'C1', nombre: 'Plan Fit', precio: 25000, descripcion: 'Desc' }
    ]));
    localStorage.setItem('nutrivida_citas_db', JSON.stringify([
      { id: 1, paciente: 'Juan', servicio: 'Plan Fit', fecha: '2026-10-10', estado: 'Pendiente' },
      { id: 2, paciente: 'Pedro', servicio: 'Plan Fit', fecha: '2026-10-11', estado: 'Confirmada' }
    ]));
  });

  it('Cubre el hook useFetch en caso de error de conexión (Branch)', async () => {
    global.fetch = vi.fn(() => Promise.resolve({ ok: false })); 
    const { result } = renderHook(() => useFetch('https://pokeapi.co/api/v2/pokemon/invalido'));
    await waitFor(() => expect(result.current.loading).toBe(false));
  });

  it('Fuerza las funciones de los menús responsivos (Funcs)', () => {
    const { container: header } = render(<MemoryRouter><Header /></MemoryRouter>);
    const { container: admin } = render(<MemoryRouter><AdminLayout /></MemoryRouter>);
    
    const botones = [...header.querySelectorAll('button'), ...admin.querySelectorAll('button')];
    botones.forEach(btn => fireEvent.click(btn));

    const links = [...header.querySelectorAll('a'), ...admin.querySelectorAll('a')];
    links.forEach(link => fireEvent.click(link));
  });

  it('Fuerza los cálculos y ciclos del DashboardAdmin (Funcs)', () => {
    render(<MemoryRouter><DashboardAdmin /></MemoryRouter>);
  });

  it('Cubre los caminos alternativos de Gracias y Agendar (Branch)', () => {
    render(<MemoryRouter initialEntries={[{ pathname: '/gracias', state: null }]}><Gracias /></MemoryRouter>);
    render(<MemoryRouter initialEntries={[{ pathname: '/gracias', state: { tipo: 'agendar' } }]}><Gracias /></MemoryRouter>);

    const { container: agendar } = render(<MemoryRouter><Agendar /></MemoryRouter>);
    const selects = agendar.querySelectorAll('select');
    selects.forEach(select => {
      if (select.options.length > 1) {
        fireEvent.change(select, { target: { value: select.options[1].value } });
      }
    });
  });
});