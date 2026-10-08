export const SERVICIOS_URL = './data/servicios.json';

/**
 * Formatea un valor numérico a moneda local chilena (CLP).
 * Función pura: fácil de testear.
 */
export function formatearPrecio(precio) {
  if (typeof precio !== 'number' || Number.isNaN(precio)) {
    return '$0';
  }
  return `$${precio.toLocaleString('es-CL')}`;
}

/**
 * Filtra el catálogo por nombre o código identificador.
 * Función pura: no muta el arreglo original.
 */
export function filtrarServicios(servicios, criterio) {
  if (!Array.isArray(servicios)) return [];
  if (!criterio || typeof criterio !== 'string' || criterio.trim() === '') {
    return servicios;
  }

  const busqueda = criterio.toLowerCase().trim();
  return servicios.filter(
    (s) =>
      s.nombre.toLowerCase().includes(busqueda) ||
      s.id.toLowerCase().includes(busqueda)
  );
}

/**
 * Encuentra un servicio por su ID.
 */
export function obtenerServicioPorId(servicios, id) {
  if (!Array.isArray(servicios) || !id) return null;
  return servicios.find((s) => s.id === id) || null;
}