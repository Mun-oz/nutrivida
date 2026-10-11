import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import Header from './Header';

vi.mock('../context/AuthContext', () => ({
  useAuth: () => ({
    user: null,
    login: vi.fn(),
    logout: vi.fn(),
  }),
}));

describe('Pruebas del componente Header', () => {
  
  it('debe abrir y cerrar el menú móvil al interactuar con los enlaces', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const menuToggle = container.querySelector('.menu-toggle');
    const navContainer = container.querySelector('.nav-container');

    // 1. Verificamos que esté cerrado inicialmente
    expect(navContainer.className).not.toContain('show');

    // 2. Abrimos el menú
    await user.click(menuToggle);
    expect(navContainer.className).toContain('show');

    // 3. Simulamos clic en un enlace interno (Prueba de Evento)
    const linkHome = screen.getByText('Home');
    await user.click(linkHome);

    // 4. Verificamos que el estado cambió y el menú se cerró
    expect(navContainer.className).not.toContain('show');
  });

});