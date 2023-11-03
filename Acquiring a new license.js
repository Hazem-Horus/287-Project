document.addEventListener("DOMContentLoaded", function() {
    const acquireLicenseForm = document.getElementById("acquire-license-form");

    acquireLicenseForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const serialNumber = document.getElementById("serial-number").value;
        const softwareName = document.getElementById("software-name").value;
        const purchaseDate = document.getElementById("purchase-date").value;
        const expiryDate = document.getElementById("expiry-date").value;

        // Simulated data (replace with your actual functionality to acquire licenses)
        alert(`Acquiring License:\nSerial Number: ${serialNumber}\nSoftware Name: ${softwareName}\nPurchase Date: ${purchaseDate}\nExpiry Date: ${expiryDate}`);
    });
});
