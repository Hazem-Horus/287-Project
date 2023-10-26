const valid_usernames = ["employee1", "employee2"];
const valid_passwords = ["boo123", "foo123"];

const employeeButton = document.getElementById("employee-login");
const customerButton = document.getElementById("customer-login");


function authenticate(){ 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(true){
        window.location.assign("home.html");
        alert("Logged in as " + username);
    }
    else{
        alert("login unsuccessful");
    }

}
employeeButton.addEventListener('click', function() {
    employeeButton.classList.add('login-button-on');
    customerButton.classList.remove('login-button-on');
});
customerButton.addEventListener('click', function() {
    customerButton.classList.add('login-button-on');
    employeeButton.classList.remove('login-button-on');
});
