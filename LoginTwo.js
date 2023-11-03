const provider_check = document.getElementById("radioProvider");

function signIn(){
    if(provider_check.checked){
        console.log("test");
        window.location.assign("provider.home.html");
    }
}