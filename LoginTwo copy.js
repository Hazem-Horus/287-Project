const provider_check = document.getElementById("radioProvider");
const client_check = document.getElementById("radioClient");


function signIn(){
    if(provider_check.checked){
        console.log("test");
        window.location.assign("provider.home.html");
    }
    else if(client_check.checked){
        console.log("hello");
        window.location.assign("clientOwnedLicenses.html");
    }}
