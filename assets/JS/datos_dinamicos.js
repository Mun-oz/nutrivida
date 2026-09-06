document.addEventListener('DOMContentLoaded', () => {
    
    // 1. BASES DE DATOS SIMULADAS (ARREGLOS COMPLETOS)


    const catalogoServicios = [
        // Consultas
        { codigo: "CN001", nombre: "Primera consulta nutricional", precio: 35000 },
        { codigo: "CN002", nombre: "Control nutricional (seguimiento)", precio: 25000 },
        { codigo: "CN003", nombre: "Control nutricional quincenal", precio: 22000 },
        { codigo: "CN004", nombre: "Teleconsulta nutricional", precio: 20000 },
        { codigo: "CN005", nombre: "Consulta de urgencia / reagendada", precio: 28000 },
        // Planes Especializados
        { codigo: "PL001", nombre: "Plan pérdida de peso (1 mes)", precio: 65000 },
        { codigo: "PL002", nombre: "Plan pérdida de peso (3 meses)", precio: 170000 },
        { codigo: "PL003", nombre: "Plan nutrición deportiva (1 mes)", precio: 70000 },
        { codigo: "PL004", nombre: "Plan control diabetes / hipertensión", precio: 75000 },
        { codigo: "PL005", nombre: "Plan alimentación vegetariana/vegana", precio: 68000 },
        { codigo: "PL006", nombre: "Plan alimentación infantil (2-12 años)", precio: 65000 },
        // Evaluaciones
        { codigo: "EV001", nombre: "Antropometría completa", precio: 18000 },
        { codigo: "EV002", nombre: "Bioimpedanciometría", precio: 12000 },
        { codigo: "EV003", nombre: "Encuesta de hábitos alimentarios", precio: 10000 },
        { codigo: "EV004", nombre: "Análisis de exámenes de laboratorio", precio: 15000 },
        // Talleres Grupales
        { codigo: "TG001", nombre: "Taller de alimentación saludable", precio: 15000 },
        { codigo: "TG002", nombre: "Taller de cocina nutritiva", precio: 20000 },
        { codigo: "TG003", nombre: "Taller nutrición para deportistas", precio: 18000 }
    ];

    const listaUsuarios = [
        // Nutricionistas
        { 
            codigo: "NUT001", 
            nombre: "Nut. Carolina Fuentes M.", 
            correo: "cfuentes@nutrivida.cl", 
            rol: "Nutricionista",
            especialidad: "Obesidad y síndrome metabólico",
            dias: "Lunes, Miércoles, Viernes",
            horario: "09:00 - 17:00"
        },
 { 
            codigo: "NUT002", 
            nombre: "Nut. Rodrigo Sepúlveda A.", 
            correo: "rsepulveda@nutrivida.cl", 
            rol: "Nutricionista",
            especialidad: "Nutrición deportiva y rendimiento",
            dias: "Martes, Jueves, Sábado",
            horario: "09:00 - 14:00"
        },
        { 
            codigo: "NUT003", 
            nombre: "Nut. Daniela Morales C.", 
            correo: "dmorales@nutrivida.cl", 
            rol: "Nutricionista",
            especialidad: "Alimentación vegetariana, vegana y trastornos alimentarios",
            dias: "Lunes a Viernes",
            horario: "08:00 - 13:00"
        },
        { 
            codigo: "NUT004", 
            nombre: "Nut. Felipe Araya R.", 
            correo: "faraya@nutrivida.cl", 
            rol: "Nutricionista",
            especialidad: "Nutrición pediátrica y familiar",
            dias: "Martes a Viernes",
            horario: "14:00 - 19:00"
        },
        // Usuarios
        { 
            codigo: "ADM01", 
            nombre: "Marcelo Muñoz", 
            correo: "admin@nutrivida.cl", 
            rol: "Administrador",
            especialidad: "Gestión y Administración de Sistemas",
            dias: "Lunes a Viernes",
            horario: "09:00 - 18:00"
        },
        { 
            codigo: "PAC01", 
            nombre: "Juan Pérez", 
            correo: "juan.perez@gmail.com", 
            rol: "Paciente",
            especialidad: "N/A",
            dias: "N/A",
            horario: "N/A"
        }
    ];

// 2. LÓGICA DE INYECCIÓN PARA CATÁLOGO
    const tbodyCatalogo = document.getElementById('tablaCatalogoBody');
    if (tbodyCatalogo) {
        catalogoServicios.forEach(servicio => {
            const precioFormateado = servicio.precio.toLocaleString('es-CL');
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${servicio.codigo}</td>
                <td>${servicio.nombre}</td>
                <td>$${precioFormateado}</td>
                <td style="display: flex; gap: 0.5rem;">
                    <button class="btn-small btn-save" onclick="window.location.href='mostrar_catalogo.html'">Ver Detalles</button>
                    <button class="btn-small" style="background-color: #f39c12; color: white;" onclick="window.location.href='editar_catalogo.html'">Editar</button>
                </td>
            `;
            tbodyCatalogo.appendChild(fila);
        });
    }

// 3. LÓGICA DE INYECCIÓN PARA USUARIOS
    const tbodyUsuarios = document.getElementById('tablaUsuariosBody');
    if (tbodyUsuarios) {
        listaUsuarios.forEach((usuario, index) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${usuario.nombre}</td>
                <td>${usuario.correo}</td>
                <td>${usuario.rol}</td>
                <td style="display: flex; gap: 0.5rem;">
                    <button class="btn-small btn-save" type="button" onclick="verPerfil(${index})">Ver Perfil</button>
                    <button class="btn-small" style="background-color: #f39c12; color: white;" onclick="window.location.href='editar_usuario.html'">Editar</button>
                </td>
            `;
            tbodyUsuarios.appendChild(fila);
        });
    }
});

// Función global usando el índice del arreglo
window.verPerfil = function(index) {
    const listaUsuarios = [
        { 
            codigo: "NUT001", 
            nombre: "Nut. Carolina Fuentes M.", 
            correo: "cfuentes@nutrivida.cl", 
            rol: "Nutricionista",
            especialidad: "Obesidad y síndrome metabólico",
            dias: "Lunes, Miércoles, Viernes",
            horario: "09:00 - 17:00"
        },
        { 
            codigo: "NUT002", 
            nombre: "Nut. Rodrigo Sepúlveda A.", 
            correo: "rsepulveda@nutrivida.cl", 
            rol: "Nutricionista",
            especialidad: "Nutrición deportiva y rendimiento",
            dias: "Martes, Jueves, Sábado",
            horario: "09:00 - 14:00"
        },
        { 
            codigo: "NUT003", 
            nombre: "Nut. Daniela Morales C.", 
            correo: "dmorales@nutrivida.cl", 
            rol: "Nutricionista",
            especialidad: "Alimentación vegetariana, vegana y trastornos alimentarios",
            dias: "Lunes a Viernes",
            horario: "08:00 - 13:00"
        },
        { 
            codigo: "NUT004", 
            nombre: "Nut. Felipe Araya R.", 
            correo: "faraya@nutrivida.cl", 
            rol: "Nutricionista",
            especialidad: "Nutrición pediátrica y familiar",
            dias: "Martes a Viernes",
            horario: "14:00 - 19:00"
        },
        { 
            codigo: "ADM01", 
            nombre: "Marcelo Muñoz", 
            correo: "admin@nutrivida.cl", 
            rol: "Administrador",
            especialidad: "Gestión y Administración de Sistemas",
            dias: "Lunes a Viernes",
            horario: "09:00 - 18:00"
        },
        { 
            codigo: "PAC01", 
            nombre: "Juan Pérez", 
            correo: "juan.perez@gmail.com", 
            rol: "Paciente",
            especialidad: "N/A",
            dias: "N/A",
            horario: "N/A"
        }
    ];

    const usuarioSeleccionado = listaUsuarios[index];
    localStorage.setItem('perfilActivo', JSON.stringify(usuarioSeleccionado));
    window.location.href = 'mostrar_usuario.html';
};