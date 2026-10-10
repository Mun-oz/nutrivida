import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import NuevoUsuarioAdmin from './NuevoUsuarioAdmin';

// Mock para interceptar la redirección (useNavigate)
const mockedNavigate = vi.fn();
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

describe('NuevoUsuarioAdmin', () => {
  // Limpiamos el LocalStorage y los mocks antes de cada prueba
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('renderiza correctamente los campos del formulario', () => {
    render(
      <MemoryRouter>
        <NuevoUsuarioAdmin />
      </MemoryRouter>
    );
    
    expect(screen.getByLabelText(/Nombre Completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo Electrónico/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Guardar Usuario/i })).toBeInTheDocument();
  });

  it('actualiza los estados internos al escribir en los inputs', () => {
    render(
      <MemoryRouter>
        <NuevoUsuarioAdmin />
      </MemoryRouter>
    );
    
    const inputNombre = screen.getByLabelText(/Nombre Completo/i);
    fireEvent.change(inputNombre, { target: { value: 'Pedro Pascal' } });
    
    expect(inputNombre.value).toBe('Pedro Pascal');
  });

  it('guarda el usuario en localStorage y redirige al enviar el formulario', () => {
    render(
      <MemoryRouter>
        <NuevoUsuarioAdmin />
      </MemoryRouter>
    );
    
    // Llenamos el formulario
    fireEvent.change(screen.getByLabelText(/Nombre Completo/i), { target: { value: 'Pedro Pascal' } });
    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), { target: { value: 'pedro@clinica.cl' } });
    
    // Enviamos
    const botonGuardar = screen.getByRole('button', { name: /Guardar Usuario/i });
    fireEvent.click(botonGuardar);

    // Verificamos persistencia
    const db = JSON.parse(localStorage.getItem('nutrivida_usuarios_db'));
    expect(db).toHaveLength(1);
    expect(db[0].nombre).toBe('Pedro Pascal');
    expect(db[0].correo).toBe('pedro@clinica.cl');

    // Verificamos redirección y mensaje de éxito
    expect(mockedNavigate).toHaveBeenCalledWith('/admin/usuario', { 
      state: { mensaje: 'Usuario creado exitosamente.' } 
    });
  });
});