
const providerButton = document.getElementById("provider-signup");
const clientsButton = document.getElementById("client-signup");
const form = document.getElementById("signup-form");

providerButton.addEventListener('click', function () {
    providerButton.classList.add('choice-button-on');
    clientsButton.classList.remove('choice-button-on');

});
clientsButton.addEventListener('click', function () {
    clientsButton.classList.add('choice-button-on');
    providerButton.classList.remove('choice-button-on');
});
