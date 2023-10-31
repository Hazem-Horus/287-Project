document.addEventListener("DOMContentLoaded", function() {
   
    const signUpForm = document.querySelector("form");
    const nameInput = document.querySelector("name");
    const emailInput = document.querySelector("email");
    const passwordInput = document.querySelector("password");
    const confirmPasswordInput = document.querySelector("confirm-password");

    signUpForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Preventing default form submission

        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (name.trim() === " " || email.trim() === " " || password.trim() === " " || confirmPassword.trim() === " ") {
            alert("All fields are required.")
        } else if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.")
        } else {
             // Can place further code to send to back end
            // Registration logic can go here
            alert("Registration successful!");
            window.location.href = "login.html"; // Redirect to the login page on success
        }
    });
});
