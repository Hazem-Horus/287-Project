document.addEventListener("DOMContentLoaded", function () {
    const renewLicenseForm = document.getElementById("renew-license-form");

    renewLicenseForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const serialNumber = document.getElementById("serial-number").value;
        const renewalStatus = document.getElementById("renewal-status").value;

        // Perform actions based on the serial number and renewal status
        if (renewalStatus === "renew") {
            // Handle license renewal
            alert(`Serial Number ${serialNumber} renewed successfully.`);
        } else if (renewalStatus === "stop") {
            // Handle stopping renewal
            alert(`Renewal of Serial Number ${serialNumber} has been stopped.`);
        }
        
        // Clear form fields
        renewLicenseForm.reset();
    });
});
