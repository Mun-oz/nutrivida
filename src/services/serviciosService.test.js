import { describe, it, expect } from 'vitest';
import { formatearPrecio, filtrarServicios, obtenerServicioPorId } from '../../../nutrividaa/src/services/serviciosService';

describe('Pruebas sobre serviciosService', () => {
  
  const mockServicios = [
    { id: 'CN001', nombre: 'Plan Control Metabólico', precio: 45000 },
    { id: 'PL002', nombre: 'Plan pérdida de peso', precio: 170000 }
  ];

  describe('formatearPrecio', () => {
    it('debe formatear un número correctamente a pesos chilenos', () => {
      expect(formatearPrecio(45000)).toBe('$45.000');
      expect(formatearPrecio(170000)).toBe('$170.000');
    });

    it('debe devolver $0 si el valor no es un número válido', () => {
      expect(formatearPrecio(null)).toBe('$0');
      expect(formatearPrecio('45000')).toBe('$0');
      expect(formatearPrecio(NaN)).toBe('$0');
    });
  });

  describe('filtrarServicios', () => {
    it('debe devolver todos los servicios si no hay criterio de búsqueda', () => {
      expect(filtrarServicios(mockServicios, '')).toEqual(mockServicios);
      expect(filtrarServicios(mockServicios, null)).toEqual(mockServicios);
    });

    it('debe filtrar correctamente por nombre (ignorando mayúsculas)', () => {
      const resultado = filtrarServicios(mockServicios, 'metabólico');
      expect(resultado.length).toBe(1);
      expect(resultado[0].id).toBe('CN001');
    });

    it('debe filtrar correctamente por código ID', () => {
      const resultado = filtrarServicios(mockServicios, 'PL002');
      expect(resultado.length).toBe(1);
      expect(resultado[0].nombre).toBe('Plan pérdida de peso');
    });

    it('debe devolver un arreglo vacío si no hay coincidencias', () => {
      expect(filtrarServicios(mockServicios, 'Inexistente')).toEqual([]);
    });

    it('debe devolver arreglo vacío si la lista de servicios no es válida', () => {
      expect(filtrarServicios(null, 'CN001')).toEqual([]);
    });
  });

  describe('obtenerServicioPorId', () => {
    it('debe encontrar y devolver el servicio si el ID coincide', () => {
      const resultado = obtenerServicioPorId(mockServicios, 'CN001');
      expect(resultado).not.toBeNull();
      expect(resultado.nombre).toBe('Plan Control Metabólico');
    });

    it('debe devolver null si el ID no existe', () => {
      expect(obtenerServicioPorId(mockServicios, 'XX999')).toBeNull();
    });

    it('debe devolver null si los parámetros son inválidos', () => {
      expect(obtenerServicioPorId(null, 'CN001')).toBeNull();
      expect(obtenerServicioPorId(mockServicios, null)).toBeNull();
    });
  });

});