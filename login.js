const valid_usernames_employees = ["employee1", "employee2"];
const valid_passwords_employees = ["epass1", "epass2"];
const valid_usernames_clients = ["client1", "client2"];
const valid_passwords_clients = ["cpass1", "cpass2"];

const employeeButton = document.getElementById("employee-login");
const customerButton = document.getElementById("customer-login");
const form = document.getElementById("login-form");

function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    let user_search = employeeButton.classList.contains('login-button-on') ? valid_usernames_employees : valid_usernames_clients;
    let pass_search = employeeButton.classList.contains('login-button-on') ? valid_passwords_employees : valid_passwords_clients;
    for (let i = 0; i < user_search.length; i++) {
        if (user_search[i] == username && pass_search[i] == password) {
                alert("Login successful");
                window.location.assign("home.html");
                return;
        }
    }

    alert("Wrong pass");
    document.getElementById("login-form").reset();
}
employeeButton.addEventListener('click', function () {
    employeeButton.classList.add('login-button-on');
    customerButton.classList.remove('login-button-on');

});
customerButton.addEventListener('click', function () {
    customerButton.classList.add('login-button-on');
    employeeButton.classList.remove('login-button-on');
});