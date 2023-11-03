
document.addEventListener("DOMContentLoaded", function() {
    const associateForm = document.getElementById("associate-license-form");

    associateForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const serialNumber = document.getElementById("serial-number").value;
        const purchaseDate = document.getElementById("purchase-date").value;
        const expiryDate = document.getElementById("expiry-date").value;

        // Add your code here to associate the license with the account (e.g., send a request to your backend)
        alert(`License with Serial Number ${serialNumber} has been associated with your account. Purchase Date: ${purchaseDate}, Expiry Date: ${expiryDate}`);
    });
});
