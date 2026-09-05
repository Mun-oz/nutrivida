const serviciosClinicos = [
    {
        id: 1,
        nombre: "Evaluación Nutricional Inicial",
        descripcion: "Análisis completo de composición corporal, anamnesis y entrega de pauta inicial.",
        precio: 35000,
        imagen: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        nombre: "Control Nutricional Mensual",
        descripcion: "Seguimiento de la pauta, medición de avances y ajustes al plan alimenticio.",
        precio: 25000,
        imagen: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        nombre: "Nutrición Deportiva",
        descripcion: "Plan enfocado en maximizar el rendimiento físico, ganancia muscular o recuperación.",
        precio: 45000,
        imagen: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        nombre: "Asesoría Transición Vegana",
        descripcion: "Acompañamiento seguro y estructurado hacia una dieta basada estrictamente en plantas.",
        precio: 30000,
        imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
];

function renderizarCatalogo() {
    const contenedor = document.getElementById('catalogo-container');

    if (!contenedor) return;

    contenedor.innerHTML = '';

    serviciosClinicos.forEach(servicio => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('product-card-home');

        const precioFormateado = servicio.precio.toLocaleString('es-CL');

        // Inyectamos el HTML interno
        tarjeta.innerHTML = `
            <img src="${servicio.imagen}" alt="${servicio.nombre}" class="product-img-real">
            <div class="product-info">
                <h4>${servicio.nombre}</h4>
                <p class="attributes" style="min-height: 40px;">${servicio.descripcion}</p>
                <p class="price">$${precioFormateado}</p>
                <button class="btn-primary" onclick="window.location.href='agendar.html'" style="margin-top: 1rem;">Agendar Hora</button>
            </div>
        `;

        // Agregamos la tarjeta al contenedor principal
        contenedor.appendChild(tarjeta);
    });
}

// 3. Ejecutar la función cuando el DOM (HTML)
document.addEventListener('DOMContentLoaded', renderizarCatalogo);