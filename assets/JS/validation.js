// FUNCION PARA VALIDAR EL RUN CHILENO
function validarRut(rutCompleto) {
    rutCompleto = rutCompleto.replace (/\./g, '').replace(/-/g, '').trim().toUpperCase();
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


// 1. VALIDACION DE LOGIN

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
                emailInput.focus();
            } else {
                alert("¡Inicio de sesión exitoso!");
                window.location.href = "index.html";
            }
        });
    }
});

// 2. LOGICA DE REGIONES Y COMUNAS

const regionSelect = document.getElementById("region");
const comunaSelect = document.getElementById("comuna");

if (regionSelect && comunaSelect && typeof datosRegiones !== "undefined") {
        datosRegiones.forEach(item => {
            const option = document.createElement("option");
            option.value = item.region;
            option.textContent = item.region;
            regionSelect.appendChild(option);
        });

        regionSelect.addEventListener("change", () => {
            const regionSeleccionada = regionSelect.value;
            comunaSelect.innerHTML = '<option value="">Seleccione una comuna</option>';

            if (regionSeleccionada) {
                const data = datosRegiones.find(r => r.region === regionSeleccionada);
                if (data) {
                    data.comunas.forEach(comuna => {
                        const option = document.createElement("option");
                        option.value = comuna;
                        option.textContent = comuna;
                        comunaSelect.appendChild(option);
                    });
                    comunaSelect.disabled = false;
                }
            } else {
                comunaSelect.disabled = true;
                comunaSelect.innerHTML = '<option value="">Seleccione primero una región</option>';
            }
        });
    }

// 3. VALIDACION FORMULARIO REGISTRO

const registroForm = document.getElementById("registroForm");

    if (registroForm) {
        const runInput = document.getElementById("run");
        const nombreInput = document.getElementById("nombre");
        const apellidosInput = document.getElementById("apellidos");
        const regEmailInput = document.getElementById("regEmail");
        const direccionInput = document.getElementById("direccion");
        const tipoUsuarioSelect = document.getElementById("tipoUsuario");
        const regPasswordInput = document.getElementById("regPassword");
        const confirmPasswordInput = document.getElementById("confirmPassword");

        const runError = document.getElementById("runError");
        const nombreError = document.getElementById("nombreError");
        const apellidosError = document.getElementById("apellidosError");
        const regEmailError = document.getElementById("regEmailError");
        const regionError = document.getElementById("regionError");
        const comunaError = document.getElementById("comunaError");
        const direccionError = document.getElementById("direccionError");
        const regPasswordError = document.getElementById("regPasswordError");
        const confirmPasswordError = document.getElementById("confirmPasswordError");

        registroForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let isValid = true;

            runError.textContent = "";
            nombreError.textContent = "";
            apellidosError.textContent = "";
            regEmailError.textContent = "";
            regionError.textContent = "";
            comunaError.textContent = "";
            direccionError.textContent = "";
            regPasswordError.textContent = "";
            confirmPasswordError.textContent = "";

            // a. Validar RUN
            const runValue = runInput.value.trim();
            if (!runValue) {
                runError.textContent = "El RUN es obligatorio.";
                runInput.value = "";
                isValid = false;
            } else if (runValue.length < 7 || runValue.length > 9) {
                runError.textContent = "El RUN debe tener entre 7 y 9 caracteres (sin puntos ni guion).";
                runInput.value = "";
                isValid = false;
            } else if (!validarRut(runValue)) {
                runError.textContent = "El RUN ingresado no es válido.";
                runInput.value = "";
                isValid = false;
            }

            // b. Validar Nombre
            const nombreValue = nombreInput.value.trim();
            if (!nombreValue) {
                nombreError.textContent = "El nombre es obligatorio.";
                nombreInput.value = "";
                isValid = false;
            } else if (nombreValue.length > 50) {
                nombreError.textContent = "El nombre no puede superar los 50 caracteres.";
                nombreInput.value = "";
                isValid = false;
            }

            // c. Validar Apellidos
            const apellidosValue = apellidosInput.value.trim();
            if (!apellidosValue) {
                apellidosError.textContent = "Los apellidos son obligatorios.";
                apellidosInput.value = "";
                isValid = false;
            } else if (apellidosValue.length > 100) {
                apellidosError.textContent = "Los apellidos no pueden superar los 100 caracteres.";
                apellidosInput.value = "";
                isValid = false;
            }

            // d. Validar Correo
            const emailValue = regEmailInput.value.trim();
            const allowedDomains = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
            const hasValidDomain = allowedDomains.some(domain => emailValue.endsWith(domain));

            if (!emailValue) {
                regEmailError.textContent = "El correo electrónico es obligatorio.";
                regEmailInput.value = "";
                isValid = false;
            } else if (emailValue.length > 100) {
                regEmailError.textContent = "El correo no puede exceder los 100 caracteres.";
                regEmailInput.value = "";
                isValid = false;
            } else if (!hasValidDomain) {
                regEmailError.textContent = "El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com";
                regEmailInput.value = "";
                isValid = false;
            }

            // e. Validar Región y Comuna
            if (!regionSelect.value) {
                regionError.textContent = "Debe seleccionar una región.";
                isValid = false;
            }

            if (!comunaSelect.value) {
                comunaError.textContent = "Debe seleccionar una comuna.";
                isValid = false;
            }

            // f. Validar Dirección
            const direccionValue = direccionInput.value.trim();
            if (!direccionValue) {
                direccionError.textContent = "La dirección es obligatoria.";
                direccionInput.value = "";
                isValid = false;
            } else if (direccionValue.length > 300) {
                direccionError.textContent = "La dirección no puede superar los 300 caracteres.";
                direccionInput.value = "";
                isValid = false;
            }

            // g. Validar Contraseña
            const passwordValue = regPasswordInput.value.trim();
            if (!passwordValue) {
                regPasswordError.textContent = "La contraseña es obligatoria.";
                regPasswordInput.value = "";
                isValid = false;
            } else if (passwordValue.length < 4 || passwordValue.length > 10) {
                regPasswordError.textContent = "La contraseña debe tener entre 4 y 10 caracteres.";
                regPasswordInput.value = "";
                isValid = false;
            }

            // h. Confirmar Contraseña
            const confirmValue = confirmPasswordInput.value.trim();
            if (!confirmValue) {
                confirmPasswordError.textContent = "Debes confirmar tu contraseña.";
                confirmPasswordInput.value = "";
                isValid = false;
            } else if (confirmValue !== passwordValue) {
                confirmPasswordError.textContent = "Las contraseñas no coinciden.";
                confirmPasswordInput.value = "";
                isValid = false;
            }

            if (isValid) {
                alert(`¡Registro de ${tipoUsuarioSelect.value} exitoso! Redirigiendo a inicio de sesión.`);
                window.location.href = "login.html";
            }
        });
    }