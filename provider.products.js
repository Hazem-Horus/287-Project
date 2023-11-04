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
    "software1": [
        { name: "john", email: "john2@hotmail.com", serialNumber : "19231ji1221219"}],

    "software2": [
        { name: "marge", email: "marge233@hotmail.com", serialNumber: "difjso9jfzoi"},
        { name: "john", email: "john2@hotmail.com", serialNumber: "sdifhjb932v9"},
        { name: "steven", email: "steven001@gmail.com", serialNumber: "asiicnbz9bj9221"}],

    "software3": [
        { name: "duck", email: "ducky@hotmail.com", serialNumber: "ijzfdbijzfbj1"}]

};


softwareSelect.addEventListener("change", function () {

    document.getElementById("serial_generation").style = "display: on;";
    document.getElementById("serial_locking").style = "display: on;";

    const selectedSoftware = softwareSelect.value;

    clientTable.style.display = "table";

    const clients = softwareData[selectedSoftware];

    const tbody = clientTable.querySelector("tbody");
    tbody.innerHTML = "";

    clients.forEach((client) => {
        const row = document.createElement("tr");
        const rowEdit = document.createElement("tr");

        row.innerHTML = `
                        <td>${client.name}</td>
                        <td>${client.email}</td>
                        <td><a href = # onclick=displayClient(${client.name}) class = "selected">Edit</a></td>
                    `;

        rowEdit.innerHTML = `
                        <td colspan = "3">
                        Edit ${client.name}'s permission to ${selectedSoftware} access

                        </br><a href = #>Disable access</a>
                        </br><label>Serial number: ${client.serialNumber}</label>

                        </td>
                    `;
        rowEdit.style = "display: none;";
        rowEdit.id = client.name;

        tbody.appendChild(row);
        tbody.appendChild(rowEdit);
    });

    clientTable.style.display = "table";

    document.getElementById("softwareName").innerHTML = selectedSoftware;
});


function displayClient(cl) {
    console.log(cl.id);
    let v = document.getElementById(cl.id);
    if (v.classList.contains("selected")) {
        v.classList.remove("selected");
        v.style = "display:none;";
    }
    else {
        v.style = "display:on;";
        v.classList.add("selected");
    }
}

function generateSerialNumber(){
    const labelS = document.getElementById("serial_number");
    let serial = "";
    for(i = 0; i < 12; i++){

        let k = Math.floor(Math.random() * 74) + 48;
        while(k > 90 && k < 97){
            k = Math.floor(Math.random() * 74) + 48;
        }
        let j = String.fromCharCode(k);
        serial += j;
        console.log(j);
    }
    console.log(serial);
    labelS.innerHTML = `
    ${serial}
    `;  
}

