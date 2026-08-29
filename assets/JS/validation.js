document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let isValid = true;

            // Limpiar errores previos
            emailError.textContent = "";
            passwordError.textContent = "";

            // 1. Validar Correo (Dominios permitidos: @duoc.cl, @profesor.duoc.cl, @gmail.com)
            const emailValue = emailInput.value.trim();
            const allowedDomains = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
            const hasValidDomain = allowedDomains.some(domain => emailValue.endsWith(domain));

            if (!emailValue) {
                emailError.textContent = "El correo electrónico es obligatorio.";
                isValid = false;
            } else if (emailValue.length > 100) {
                emailError.textContent = "El correo no puede exceder los 100 caracteres.";
                isValid = false;
            } else if (!hasValidDomain) {
                emailError.textContent = "El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com";
                isValid = false;
            }

            // 2. Validar Contraseña (Tiene que ser entre 4 y 10 caracteres)
            const passwordValue = passwordInput.value.trim();
            if (!passwordValue) {
                passwordError.textContent = "La contraseña es obligatoria.";
                isValid = false;
            } else if (passwordValue.length < 4 || passwordValue.length > 10) {
                passwordError.textContent = "La contraseña debe tener entre 4 y 10 caracteres.";
                isValid = false;
            }

            // Si es que falla la validacion, este se limpia y pide ingresar nuevamente
            if (!isValid) {
                emailInput.value = "";
                passwordInput.value = "";
                emailInput.focus(); // Coloca el cursor en el primer campo
            } else {
                alert("¡Inicio de sesión exitoso!");
                window.location.href = "index.html";
            }
        });
    }
});