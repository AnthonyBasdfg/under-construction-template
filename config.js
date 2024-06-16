const siteConfig = {
    siteName: 'Url.me',
    linkedinProfile: 'https://www.linkedin.com/in/your-profile/'
};

// Actualizar el título del sitio en la página HTML
document.getElementById('site-name').textContent = siteConfig.siteName;
document.getElementById('site-name').href = 'https://' + siteConfig.siteName; // Configurar el enlace al sitio web
