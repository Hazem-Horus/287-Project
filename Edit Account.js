document.addEventListener("DOMContentLoaded", function() {
    const editAccountForm = document.getElementById("edit-account-form");

    editAccountForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Add validation logic here
        if (password !== confirmPassword) {
            alert("Password and Confirm Password must match.");
        } else {
            // You can send the data to your backend here
            alert("Account updated successfully!");
        }
    });
});
