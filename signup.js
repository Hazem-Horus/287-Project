
const providerButton = document.getElementById("provider-signup");
const clientsButton = document.getElementById("client-signup");
const form = document.getElementById("signup-form");

function createAccount(){
    var first_name = document.getElementById("first-name");
    var last_name = document.getElementById("last-name");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var reentered_password = document.getElementById("reentered-password");
    var email = document.getElementById("email");

}


providerButton.addEventListener('click', function () {
    providerButton.classList.add('choice-button-on');
    clientsButton.classList.remove('choice-button-on');

});
clientsButton.addEventListener('click', function () {
    clientsButton.classList.add('choice-button-on');
    providerButton.classList.remove('choice-button-on');
});


