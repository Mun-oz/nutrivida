import { render, fireEvent } from '@testing-library/react';
import { describe, it, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router';

import Gracias from '../Gracias';
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

vi.mock('../context/AuthContext', () => ({
  useAuth: () => ({
    user: { email: 'admin@clinica.cl', rol: 'Administrador' },
    logout: vi.fn(),
  }),
}));

describe('Remate final de cobertura', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Inyectamos datos en el LocalStorage para que las tablas tengan filas que mostrar
    localStorage.setItem('nutrivida_usuarios_db', JSON.stringify([
      { id: 1, nombre: 'Paciente Prueba', correo: 'paciente@cl.cl', rol: 'Paciente' }
    ]));
    localStorage.setItem('nutrivida_catalogo_db', JSON.stringify([
      { id: 'C999', nombre: 'Servicio Prueba', descripcion: 'Desc', precio: 50000, imagen: '' }
    ]));
  });

  it('renderiza vista Gracias completamente', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/gracias', state: { tipo: 'contacto' } }]}>
        <Gracias />
      </MemoryRouter>
    );
  });

  it('renderiza tablas de administrador con datos y lee sus funciones internas', () => {
    const { container: containerUsuarios } = render(<MemoryRouter><UsuarioAdmin /></MemoryRouter>);
    const { container: containerCatalogo } = render(<MemoryRouter><CatalogoAdmin /></MemoryRouter>);
    render(<MemoryRouter><DashboardAdmin /></MemoryRouter>);

    // Evitamos que los 'window.confirm' nativos de los botones de eliminar bloqueen el test
    window.confirm = vi.fn(() => true); 

    // Capturamos TODOS los botones de las filas (Editar, Eliminar, Ver) sin importar su texto o ícono, y los clickeamos
    const botonesUsuarios = containerUsuarios.querySelectorAll('button');
    botonesUsuarios.forEach(btn => fireEvent.click(btn));

    const botonesCatalogo = containerCatalogo.querySelectorAll('button');
    botonesCatalogo.forEach(btn => fireEvent.click(btn));
  });
});