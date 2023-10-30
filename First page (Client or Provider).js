document.addEventListener("DOMContentLoaded", function() {
    const clientButton = document.getElementById("client-button");
    const providerButton = document.getElementById("provider-button");

    clientButton.addEventListener("click", function() {
        // Redirect to client login/sign-up page
        window.location.href = "client-login.html"; 
    });

    providerButton.addEventListener("click", function() {
        // Redirect to provider login/sign-up page
        window.location.href = "provider.login.html";
    });
});
