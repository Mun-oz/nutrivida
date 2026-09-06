document.addEventListener('DOMContentLoaded', function() {
    const formEditarCatalogo = document.getElementById('formEditarCatalogo');

    if (formEditarCatalogo) {
        formEditarCatalogo.addEventListener('submit', function(evento) {
            evento.preventDefault(); 

            const nombreActualizado = document.getElementById('editNombreServicio').value;
            const precioActualizado = document.getElementById('editPrecioServicio').value;
            const precioFormateado = Number(precioActualizado).toLocaleString('es-CL');

            alert(`✅ Catálogo Actualizado\n\nEl servicio "${nombreActualizado}" se ha modificado correctamente. Su nuevo valor es $${precioFormateado}.`);

            window.location.href = 'catalogo.html';
        });
    }
});