document.addEventListener('DOMContentLoaded', () => {
    const catalogoPublico = [
        { codigo: "CN001", nombre: "Primera consulta nutricional", precio: 35000, imagen: "assets/img/consulta_nutri.jpg" },
        { codigo: "CN002", nombre: "Control nutricional (seguimiento)", precio: 25000, imagen: "assets/img/control_nutri_seg.jpg" },
        { codigo: "CN003", nombre: "Control nutricional quincenal", precio: 22000, imagen: "assets/img/control_nutri_seg.jpg" },
        { codigo: "CN004", nombre: "Teleconsulta nutricional", precio: 20000, imagen: "assets/img/tele_nutri.jpg" },
        { codigo: "CN005", nombre: "Consulta de urgencia / reagendada", precio: 28000, imagen: "assets/img/consulta_reag.png" },
        { codigo: "PL001", nombre: "Plan pérdida de peso (1 mes)", precio: 65000, imagen: "assets/img/perdida_peso.jpg" },
        { codigo: "PL002", nombre: "Plan pérdida de peso (3 meses)", precio: 170000, imagen: "assets/img/perdida_peso.jpg" },
        { codigo: "PL003", nombre: "Plan nutrición deportiva (1 mes)", precio: 70000, imagen: "assets/img/nutriciondeporte.jpg" },
        { codigo: "PL004", nombre: "Plan control diabetes / hipertensión", precio: 75000, imagen: "assets/img/control_diab.jpg" },
        { codigo: "PL005", nombre: "Plan alimentación vegetariana/vegana", precio: 68000, imagen: "assets/img/t_veg.jpg" },
        { codigo: "PL006", nombre: "Plan alimentación infantil (2-12 años)", precio: 65000, imagen: "assets/img/ali_infantil.jpg" },
        { codigo: "EV001", nombre: "Antropometría completa", precio: 18000, imagen: "assets/img/antropometria.jpg" },
        { codigo: "EV002", nombre: "Bioimpedanciometría", precio: 12000, imagen: "assets/img/bio.png" },
        { codigo: "EV003", nombre: "Encuesta de hábitos alimentarios", precio: 10000, imagen: "assets/img/encuesta.jpg" },
        { codigo: "EV004", nombre: "Análisis de exámenes de laboratorio", precio: 15000, imagen: "assets/img/ex_lab.jpg" },
        { codigo: "TG001", nombre: "Taller de alimentación saludable", precio: 15000, imagen: "assets/img/ali_salud.jpg" },
        { codigo: "TG002", nombre: "Taller de cocina nutritiva", precio: 20000, imagen: "assets/img/taller_sal.jpg" },
        { codigo: "TG003", nombre: "Taller nutrición para deportistas", precio: 18000, imagen: "assets/img/nutriciondeporte.jpg" }
    ];

    const contenedorPublico = document.getElementById('catalogo-container');
    if (contenedorPublico) {
        contenedorPublico.innerHTML = '';
        
        catalogoPublico.forEach(servicio => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('product-card-home');

            const precioFormateado = servicio.precio ? servicio.precio.toLocaleString('es-CL') : '0';
            const rutaImagen = servicio.imagen || 'assets/img/default.jpg';

            tarjeta.innerHTML = `
                <img src="${rutaImagen}" alt="${servicio.nombre}" class="product-img-real">
                <div class="product-info" style="background: white; padding: 1.5rem; border-radius: 0 0 8px 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); display: flex; flex-direction: column; height: 100%;">
                    <span style="font-size: 0.8rem; color: #666; font-weight: bold; margin-bottom: 0.3rem;">CÓDIGO: ${servicio.codigo}</span>
                    <h4 style="color: var(--primary-color); margin-bottom: 0.5rem; font-size: 1.1rem;">${servicio.nombre}</h4>
                    <p class="attributes" style="color: #444; font-size: 0.9rem; flex-grow: 1; margin-bottom: 1rem;">Asesoría y atención profesional especializada de NutriVida.</p>
                    <p class="price" style="font-weight: bold; font-size: 1.1rem; color: #2e7d32; margin-bottom: 1rem;">$${precioFormateado} CLP</p>
                    <button class="btn-primary" onclick="window.location.href='agendar.html'" style="width: 100%;">Agendar Hora</button>
                </div>
            `;

            contenedorPublico.appendChild(tarjeta);
        });
    }
});