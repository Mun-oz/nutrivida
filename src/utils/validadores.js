// Algoritmo para validar el RUT chileno
export function validarRut(rutCompleto) {
    rutCompleto = rutCompleto.replace(/\./g, '').replace(/-/g, '').trim().toUpperCase();
    if (!/^[0-9]+[0-9K]$/.test(rutCompleto)) return false;

    if (rutCompleto.length < 7 || rutCompleto.length > 9) return false;

    const cuerpo = rutCompleto.slice(0, -1);
    const dv = rutCompleto.slice(-1);

    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo.charAt(i)) * multiplo;
        multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    const dvEsperado = 11 - (suma % 11);
    let dvCalculado = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();

    return dvCalculado === dv;
}

// Función reutilizable para validar los dominios
export function validarDominioCorreo(email) {
    const allowedDomains = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
    return allowedDomains.some(domain => email.endsWith(domain));
}