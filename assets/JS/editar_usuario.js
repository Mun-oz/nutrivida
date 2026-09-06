document.addEventListener('DOMContentLoaded', function() {
    const formEditar = document.getElementById('formEditarRol');

    if (formEditar) {
        formEditar.addEventListener('submit', function(evento) {
            evento.preventDefault(); 

            const selectRol = document.getElementById('nuevoRol');
            const rolTexto = selectRol.options[selectRol.selectedIndex].text;

            alert(`✅ Permisos Actualizados\n\nEl rol de "Juan Pérez" ha sido modificado exitosamente a: ${rolTexto}.`);

            window.location.href = 'usuario.html';
        });
    }
});