const customerButton = document.getElementById('customer-login');
const employeeButton = document.getElementById('employee-login');
const customerForm = document.getElementById('customer-form');
const employeeForm = document.getElementById('employee-form');
const employeeLoginButton = document.getElementById('employee-login-button');
const customerLoginButton = document.getElementById('employee-login-button');

alert("test");


customerButton.addEventListener('click', function () {
    customerButton.classList.add('active-button');
    employeeButton.classList.remove('active-button');
    customerForm.style.display = 'block';
    employeeForm.style.display = 'none';
});

employeeButton.addEventListener('click', function () {
    employeeButton.classList.add('active-button');
    customerButton.classList.remove('active-button');
    employeeForm.style.display = 'block';
    customerForm.style.display = 'none';
});

employeeLoginButton.addEventListener('click', function () {
    if (customerButton.classList.contains('active-button')) {
        console.log("employee");
    }
})
customerLoginButton.addEventListener('click', function () {
    if (employeeButton.classList.contains('active-button')) {
        console.log("customer");
    }
})


