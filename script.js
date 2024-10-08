document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada correctamente.");
    const googleLoginButton = document.getElementById('google-login');
    const facebookLoginButton = document.getElementById('facebook-login');
    
    googleLoginButton.addEventListener('click', () => {
        alert("Iniciar sesión con Google.");
    });

    facebookLoginButton.addEventListener('click', () => {
        alert("Iniciar sesión con Facebook.");
    });
});
