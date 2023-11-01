
document.addEventListener("DOMContentLoaded", function() {
    // Simulated serial numbers data (replace with actual data)
    const serialNumbers = [
        {
            serialNumber: "123456",
            softwareName: "Software A",
            purchaseDate: "2023-01-15",
            expiryDate: "2023-12-31"
        },
        {
            serialNumber: "789012",
            softwareName: "Software B",
            purchaseDate: "2022-08-20",
            expiryDate: "2023-08-19"
        },
        // Add more serial numbers here
    ];

    // Function to populate the serial numbers list
    function populateSerialNumbers() {
        const serialsList = document.getElementById("serials-list");

        serialNumbers.forEach(serial => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${serial.serialNumber}</td>
                <td>${serial.softwareName}</td>
                <td>${serial.purchaseDate}</td>
                <td>${serial.expiryDate}</td>
            `;
            serialsList.appendChild(row);
        });
    }

    // Call the function to populate the list
    populateSerialNumbers();
});
