import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import Registro from './Registro';

// Interceptamos window.alert para poder evaluar los mensajes en Registro.jsx sin que el test se detenga
window.alert = vi.fn();

// Hacemos un "mock" del hook useNavigate para saber a qué URL nos intenta enviar la aplicación
const mockedUseNavigate = vi.fn();
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

describe('Pruebas de Interacción en Formularios', () => {

  beforeEach(() => {
    vi.clearAllMocks(); // Limpia los clicks, alertas y navegaciones antes de cada prueba
  });

  describe('Formulario de Login', () => {
    it('debe mostrar mensaje de error si el correo no tiene un dominio permitido', async () => {
      const user = userEvent.setup();
      render(<MemoryRouter><Login /></MemoryRouter>);

      await user.type(screen.getByLabelText('Correo Electrónico'), 'correo@invalido.com');
      await user.click(screen.getByText('Ingresar'));

      expect(screen.getByText('El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com')).toBeTruthy();
    });

    it('debe redirigir a /admin/home si es correo de profesor', async () => {
      const user = userEvent.setup();
      render(<MemoryRouter><Login /></MemoryRouter>);

      await user.type(screen.getByLabelText('Correo Electrónico'), 'juan@profesor.duoc.cl');
      await user.click(screen.getByText('Ingresar'));

      expect(mockedUseNavigate).toHaveBeenCalledWith('/admin/home');
    });

    it('debe redirigir a / si es un alumno/usuario normal', async () => {
      const user = userEvent.setup();
      render(<MemoryRouter><Login /></MemoryRouter>);

      await user.type(screen.getByLabelText('Correo Electrónico'), 'alumno@duoc.cl');
      await user.click(screen.getByText('Ingresar'));

      expect(mockedUseNavigate).toHaveBeenCalledWith('/');
    });
  });

  describe('Formulario de Registro', () => {
    it('debe activar el selector de comunas al elegir una región', async () => {
      const user = userEvent.setup();
      render(<MemoryRouter><Registro /></MemoryRouter>);

      const selectRegion = screen.getByLabelText('Región:');
      const selectComuna = screen.getByLabelText('Comuna:');

      expect(selectComuna).toBeDisabled();
      await user.selectOptions(selectRegion, 'Región Metropolitana');
      expect(selectComuna).not.toBeDisabled();
    });

    it('debe mostrar alerta si el RUN es inválido', async () => {
      const user = userEvent.setup();
      render(<MemoryRouter><Registro /></MemoryRouter>);

      await user.type(screen.getByLabelText('RUN (Sin puntos ni guion):'), '123');
      await user.click(screen.getByText('Registrarse'));

      expect(window.alert).toHaveBeenCalledWith('Error: El RUN ingresado no es válido.');
    });

    it('debe mostrar alerta si las contraseñas no coinciden', async () => {
      const user = userEvent.setup();
      render(<MemoryRouter><Registro /></MemoryRouter>);

      await user.type(screen.getByLabelText('RUN (Sin puntos ni guion):'), '11111114');
      await user.type(screen.getByLabelText('Correo Electrónico:'), 'alumno@duoc.cl');
      await user.type(screen.getByLabelText('Contraseña:'), 'pass1');
      await user.type(screen.getByLabelText('Confirmar Contraseña:'), 'pass2');
      
      await user.click(screen.getByText('Registrarse'));

      expect(window.alert).toHaveBeenCalledWith('Error: Las contraseñas no coinciden.');
    });

    it('debe registrar exitosamente si todos los datos son correctos', async () => {
      const user = userEvent.setup();
      render(<MemoryRouter><Registro /></MemoryRouter>);

      // Simulamos la carga completa del formulario con un RUT válido (1111111-4)
      await user.type(screen.getByLabelText('RUN (Sin puntos ni guion):'), '11111114');
      await user.type(screen.getByLabelText('Nombre Completo:'), 'Marcelo Muñoz');
      await user.type(screen.getByLabelText('Correo Electrónico:'), 'marcelo@duoc.cl');
      await user.type(screen.getByLabelText('Dirección:'), 'Lo Prado 123');
      await user.type(screen.getByLabelText('Contraseña:'), 'pass123');
      await user.type(screen.getByLabelText('Confirmar Contraseña:'), 'pass123');

      const selectRegion = screen.getByLabelText('Región:');
      await user.selectOptions(selectRegion, 'Región Metropolitana');

      await user.click(screen.getByText('Registrarse'));

      expect(window.alert).toHaveBeenCalledWith('¡Registro exitoso! Redirigiendo a inicio de sesión.');
      expect(mockedUseNavigate).toHaveBeenCalledWith('/login');
    });
  });
});