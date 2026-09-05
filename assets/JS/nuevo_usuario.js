document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formNuevoUsuario');

    if (form) {
        form.addEventListener('submit', function(evento) {
            evento.preventDefault(); 

            // Captura los datos ingresados
            const nombre = document.getElementById('nombreUsuario').value;
            const selectRol = document.getElementById('rolUsuario');
            const rolTexto = selectRol.options[selectRol.selectedIndex].text;

            alert(`✅ ¡Éxito! El usuario "${nombre}" ha sido registrado en el sistema con el rol de ${rolTexto}.`);
            
            window.location.href = 'usuario.html';
        });
    }
});