document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".sidebar a");
    const contentSections = document.querySelectorAll(".content > div");

    // Function to show content based on the selected menu item
    function showContent(event) {
        event.preventDefault();
        const target = event.target.getAttribute("href").substring(1); // removes the #
        const content = getContent(target);

        // Hide all content sections
        contentSections.forEach(section => {
            section.style.display = 'none';
        });

        // Display selected content
        content.style.display = 'block';
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
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener("click", showContent);
    });

    // Handle Edit Account, Delete Account, and Logout buttons
    document.getElementById("edit-account").addEventListener("click", function() {
        // Editing account functionality goes here
        alert("Edit Account clicked. Functionality goes here");
    });

    document.getElementById("delete-account").addEventListener("click", function() {
        // Delete account functionality goes here
        alert("Delete Account clicked. Functionality goes here");
    });

    document.getElementById("logout").addEventListener("click", function() {
        // Logout account functionality goes here
        alert("Logout clicked. Functionality goes here");
    });
});
