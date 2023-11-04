class software {
    constructor(name, serialNumber) {
        this.name = name;
        this.serialNumber = serialNumber;
    }
}

let software1 = new software("lightroom", "24214314134");
let software2 = new software("photoshop", "31414134344");

const clientSelect = document.getElementById("clientSelect");
const softwareTable = document.getElementById("softwareTable");
const clientData = {
    "client1": [
        { name: "john", serialNumber : "19231jgnbvi219"}],

    "client2": [
        { name: "lightroom", serialNumber: "difjso2019jfzoi"},
        { name: "photoshop", serialNumber: "sdifhjb932jzcv9"},
        { name: "aftereffects", serialNumber: "asiicnbz9bj9221"}],

    "client3": [
        { name: "duck", serialNumber: "ijzfdbijzdfvdfbj1"}]
};


clientSelect.addEventListener("change", function () {


    const selectedClient = clientSelect.value;

    softwareTable.style = "display:table;";

    const softwares = clientData[selectedClient];

    const tbody = softwareTable.querySelector("tbody");
    tbody.innerHTML = "";

    softwares.forEach((software) => {
        const row = document.createElement("tr");
        const rowEdit = document.createElement("tr");

        row.innerHTML = `
                        <td>${software.name}</td>
                        <td>${software.serialNumber}</td>
                        <td><a href = # onclick=displaySoftware(${software.name}) class = "selected">Edit</a></td>
                    `;

        rowEdit.innerHTML = `
                        <td colspan = "3">
                        Edit ${software.name}'s permission to ${selectedClient} access

                        </br><a href = #>Disable access</a>
                        </br><label>Serial number: </label>

                        </td>
                    `;
        rowEdit.style = "display: none;";
        rowEdit.id = software.name;


        tbody.appendChild(row);
        tbody.appendChild(rowEdit);
    });
    softwareTable.style.display = "table";
});


function displaySoftware(cl) {
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
