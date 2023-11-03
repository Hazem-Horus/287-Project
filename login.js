/* HARD CODED ACCOUNTS FOR NOW */
const valid_usernames_provider = ["employee1", "employee2"];
const valid_passwords_provider = ["epass1", "epass2"];


const valid_usernames_clients = ["client1", "client2"];
const valid_passwords_clients = ["cpass1", "cpass2"];

const providerButton = document.getElementById("provider-login");
const clientsButton = document.getElementById("client-login");
const form = document.getElementById("login-form");

function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    let user_search = providerButton.classList.contains('choice-button-on') ? valid_usernames_provider : valid_usernames_clients;
    let pass_search = providerButton.classList.contains('choice-button-on') ? valid_passwords_provider : valid_passwords_clients;

    for (let i = 0; i < user_search.length; i++) {
        if (user_search[i] == username && pass_search[i] == password) {
                alert("Login successful");
                providerButton.classList.contains('login-button-on') ? window.location.assign("provider_home.html") : window.location.assign("client_home.html");
                return;
        }
    }
    alert("Invalid username or password \nLogin unsuccessful");
    document.getElementById("login-form").reset();
}

function signUp(){
    window.location.assign("signup.html");
}

//______________________EVENT LISTENERS___________________________

providerButton.addEventListener('click', function () {
    providerButton.classList.add('choice-button-on');
    clientsButton.classList.remove('choice-button-on');

});
clientsButton.addEventListener('click', function () {
    clientsButton.classList.add('choice-button-on');
    providerButton.classList.remove('choice-button-on');
});