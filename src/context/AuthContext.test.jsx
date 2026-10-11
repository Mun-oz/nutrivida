import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { AuthProvider, useAuth } from './AuthContext';

// Creamos un componente falso (dummy) solo para poder usar y probar el contexto por dentro
const ConsumidorContexto = () => {
  const { user, login, logout } = useAuth();
  return (
    <div>
      <div data-testid="usuario-actual">{user ? user.correo || user.email : 'invitado'}</div>
      <button onClick={() => login({ email: 'admin@clinica.cl', rol: 'Administrador' })}>
        Iniciar Sesión
      </button>
      <button onClick={logout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

describe('Pruebas de AuthContext', () => {
  
  beforeEach(() => {
    localStorage.clear();
  });

  it('provee el estado inicial, permite iniciar sesión y luego cerrarla', async () => {
    const user = userEvent.setup();
    render(
      <AuthProvider>
        <ConsumidorContexto />
      </AuthProvider>
    );

    // 1. Verificamos que al principio no hay usuario (estado inicial)
    expect(screen.getByTestId('usuario-actual').textContent).toBe('invitado');

    // 2. Simulamos hacer click en Login y verificamos que el contexto se actualiza
    await user.click(screen.getByText('Iniciar Sesión'));
    expect(screen.getByTestId('usuario-actual').textContent).toBe('admin@clinica.cl');

    // 3. Simulamos hacer click en Logout y verificamos que se borra el usuario
    await user.click(screen.getByText('Cerrar Sesión'));
    expect(screen.getByTestId('usuario-actual').textContent).toBe('invitado');
  });
});