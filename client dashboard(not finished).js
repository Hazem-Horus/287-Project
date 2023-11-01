document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".sidebar a");
    const contentSections = document.querySelectorAll(".content > div");
    const editAccountButton = document.getElementById("edit-account");

    // Function to show content based on the selected menu item
    function showContent(event) {
        event.preventDefault();
        const target = event.target.getAttribute("href").substring(1); // removes the #
        const content = getContent(target);

        // Hide all content sections
        contentSections.forEach((section) => {
            section.style.display = "none";
        });

        // Display selected content
        content.style.display = "block";
    }

    // Function to edit the account (simplified for demonstration)
    function editAccount() {
        const newAccountName = prompt("Enter the new account name:");
        // Update the account name or perform necessary backend operations here
        if (newAccountName) {
            alert(`Account name updated to: ${newAccountName}`);
        }
    }

    // Simulated content for menu items (replace with actual content)
    function getContent(target) {
        switch (target) {
            case "account":
                return document.getElementById("account-content");
            case "licenses":
                return document.getElementById("licenses-content");
            default:
                return document.getElementById("dashboard-content");
        }
    }

    // Add click event listeners to menu items
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", showContent);
    });

    // Handle Edit Account, Delete Account, and Logout buttons
    editAccountButton.addEventListener("click", editAccount);

    // Handle Delete Account button (simplified for demonstration)
    document.getElementById("delete-account").addEventListener("click", function () {
        if (confirm("Are you sure you want to delete your account?")) {
            // Perform the account deletion process (backend logic) here
            alert("Your account has been deleted.");
        }
    });

    document.getElementById("logout").addEventListener("click", function () {
        // Logout account functionality goes here
        alert("Logout clicked. Functionality goes here");
    });

    // Show dashboard content by default
    document.getElementById("dashboard").click();
});
