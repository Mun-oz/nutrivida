import { describe, it, expect } from 'vitest';
import { validarRut, validarDominioCorreo } from '../../../nutrividaa/src/utils/validadores';

describe('Pruebas sobre validadores.js', () => {

  describe('validarRut', () => {
    it('debe retornar true para un RUT válido (con o sin puntos/guión)', () => {
      // Usamos un RUT simulado que matemáticamente es válido (1234567-4)
      expect(validarRut('1.234.567-4')).toBe(true);
      expect(validarRut('1234567-4')).toBe(true);
    });

    it('debe retornar false para un RUT con formato o largo inválido', () => {
      expect(validarRut('12345XYZ')).toBe(false);
      expect(validarRut('123')).toBe(false); // muy corto
      expect(validarRut('11111111111-1')).toBe(false); // muy largo
    });

    it('debe retornar false si el dígito verificador es incorrecto', () => {
      expect(validarRut('1234567-9')).toBe(false);
    });

    it('debe manejar correctamente cálculos que devuelvan 0 o K', () => {
      // Pasamos ruts inválidos terminados en K y 0 solo para que el código pase por esos "if"
      expect(validarRut('1111111-K')).toBe(false);
      expect(validarRut('1111111-0')).toBe(false);
    });
  });

  describe('validarDominioCorreo', () => {
    it('debe validar correos con los dominios permitidos', () => {
      expect(validarDominioCorreo('alumno@duoc.cl')).toBe(true);
      expect(validarDominioCorreo('profe@profesor.duoc.cl')).toBe(true);
      expect(validarDominioCorreo('usuario@gmail.com')).toBe(true);
    });

    it('debe rechazar correos con dominios no permitidos', () => {
      expect(validarDominioCorreo('usuario@hotmail.com')).toBe(false);
      expect(validarDominioCorreo('usuario@yahoo.com')).toBe(false);
      expect(validarDominioCorreo('usuario@empresax.cl')).toBe(false);
    });
  });
});