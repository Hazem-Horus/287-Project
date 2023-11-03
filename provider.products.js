class client {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

let client1 = new client("john", "john2@hotmail.com");
let client2 = new client("marge", "marge233@outlook.com");

const softwareSelect = document.getElementById("softwareSelect");
const clientTable = document.getElementById("clientTable");
const softwareData = {
    "software1": [{ name: "john", email: "john2@hotmail.com" }],
    "software2": [{ name: "marge", email: "marge233@hotmail.com" },{ name: "john", email: "john2@hotmail.com" },{name: "steven", email: "steven001@gmail.com"}],
    "software3": [{ name: "duck", email: "ducky@hotmail.com" }]
};


softwareSelect.addEventListener("change", function () {
    const selectedSoftware = softwareSelect.value;

    clientTable.style.display = "table";

    const clients = softwareData[selectedSoftware];
    const tbody = clientTable.querySelector("tbody");
    tbody.innerHTML = "";

    clients.forEach((client) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                        <td>${client.name}</td>
                        <td>${client.email}</td>
                        <td><a href = # onclick=displayClient(${client})>Edit</a></td>
                    `;
        tbody.appendChild(row);
    });

    


    clientTable.style.display = "table";
});