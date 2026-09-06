document.addEventListener('DOMContentLoaded', function() {
    const formCatalogo = document.getElementById('formNuevoCatalogo');

    if (formCatalogo) {
        formCatalogo.addEventListener('submit', function(evento) {
            evento.preventDefault(); 

            const nombre = document.getElementById('nombreServicio').value;
            const precio = document.getElementById('precioServicio').value;
            const precioFormateado = Number(precio).toLocaleString('es-CL');

            alert(`✅ ¡Servicio creado!\n\nSe ha agregado "${nombre}" al catálogo con un valor de $${precioFormateado}.`);
            
            window.location.href = 'catalogo.html';
        });
    }
});