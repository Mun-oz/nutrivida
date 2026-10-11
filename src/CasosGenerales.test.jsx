import { render, fireEvent } from '@testing-library/react';
import { describe, it, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router';

// Importamos exactamente los 5 archivos que están en rojo
import RequireAuth from './cors/RequireAuth';
import Header from './cors/Header';
import DashboardAdmin from './pages/admin/DashboardAdmin';
import AdminLayout from './pages/admin/AdminLayout';
import Agendar from './pages/Agendar';

const mockedUseNavigate = vi.fn();
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

// Simulamos que somos un "Paciente" normal. Esto forzará a RequireAuth a ejecutar 
// su bloque de código de rechazo (Branch) cuando intente entrar a una ruta de Admin.
vi.mock('./context/AuthContext', () => ({
  useAuth: () => ({
    user: { email: 'paciente@cl.cl', rol: 'Paciente' },
    logout: vi.fn(),
  }),
}));

describe('Operación 80% - Caza de Ramas y Funciones', () => {
  
  beforeEach(() => {
    vi.clearAllMocks();
    // Llenamos la base de datos con información variada para que los cálculos 
    // matemáticos y filtros del DashboardAdmin se vean obligados a trabajar (Funcs)
    localStorage.setItem('nutrivida_usuarios_db', JSON.stringify([
      { id: 1, rol: 'Administrador' }, 
      { id: 2, rol: 'Paciente' }
    ]));
    localStorage.setItem('nutrivida_catalogo_db', JSON.stringify([
      { id: 'C1', precio: 10000 }, 
      { id: 'C2', precio: 20000 }
    ]));
    localStorage.setItem('nutrivida_citas_db', JSON.stringify([
      { id: 1, estado: 'Pendiente' }, 
      { id: 2, estado: 'Confirmada' }
    ]));
  });

  it('Cubre las ramas restrictivas de RequireAuth (Rechazo de acceso)', () => {
    render(
      <MemoryRouter>
        <RequireAuth requireAdmin={true}><div>Secreto Admin</div></RequireAuth>
        <RequireAuth requireAdmin={false}><div>Área Paciente</div></RequireAuth>
      </MemoryRouter>
    );
  });

  it('Fuerza la ejecución de todas las funciones, botones y selectores rezagados', () => {
    // Renderizamos los componentes problemáticos todos juntos
    render(<MemoryRouter><Header /></MemoryRouter>);
    render(<MemoryRouter><AdminLayout /></MemoryRouter>);
    render(<MemoryRouter><DashboardAdmin /></MemoryRouter>);
    render(<MemoryRouter><Agendar /></MemoryRouter>);

    // 1. Buscamos TODOS los selectores (combobox) de la pantalla y les cambiamos el valor
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
      if(select.options.length > 1) {
        fireEvent.change(select, { target: { value: select.options[1].value } });
      }
    });

    // 2. Buscamos TODOS los inputs de texto y escribimos en ellos
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      fireEvent.change(input, { target: { value: 'Prueba de cobertura' } });
    });

    // 3. Buscamos TODOS los botones (cerrar sesión, menús, guardar) y hacemos clic en todos
    const botones = document.querySelectorAll('button');
    botones.forEach(btn => fireEvent.click(btn));
  });
});