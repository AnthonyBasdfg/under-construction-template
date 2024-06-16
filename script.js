document.addEventListener('DOMContentLoaded', function () {
    const pinInput = document.getElementById('pinInput');
    const keys = document.querySelectorAll('.key');
    //const correctPin = 'no hay :)';

    // Configurar el nombre del sitio y el enlace de LinkedIn
    document.getElementById('site-name').textContent = siteConfig.siteName;
    document.getElementById('site-title').textContent = siteConfig.siteName;
    document.getElementById('linkedin-link').href = siteConfig.linkedinProfile;

    keys.forEach(key => {
        key.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            if (value === 'clear') {
                pinInput.value = '';
                clearErrorMessage();
            } else if (value === 'Acceder') {
                if (pinInput.value.length !== 4) {
                    displayErrorMessage('¡Oops! Debes ingresar exactamente 4 dígitos.');
                    pinInput.value = '';
                } else {
                    displayErrorMessage('¡Oops! El Pin no es el correcto. Inténtalo de nuevo o contacta con el administrador.');
                    pinInput.value = '';
                }
            } else {
                if (pinInput.value.length < 4) {
                    pinInput.value += value;
                    clearErrorMessage();
                }
            }
        });
    });

    // Función para mostrar mensaje de error
    function displayErrorMessage(message) {
        document.getElementById('errorMsg').textContent = message;
    }

    // Función para limpiar mensaje de error
    function clearErrorMessage() {
        document.getElementById('errorMsg').textContent = '';
    }
});

// Este sitio fue construido con la ayuda de ChatGPT.

