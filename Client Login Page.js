document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Simulated user credentials (replace with our own user data)
    const validUsername = "user";
    const validPassword = "password"

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Preventing the default form submission

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username.trim() === " " || password.trim() === " ") {
            alert("Username and/or password are required")
        } else {
            if (authenticateUser(username, password)) {
                alert("Login Successful!");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password. Please try again.");
            }
        }
    });

    function authenticateUser(username, password) {
         // Simulated authentication logic (replace with our own server-side logic data)
        return username === validUsername && password === validPassword;
    }

});
