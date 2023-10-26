function authenticate(){ 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "d" && password =="d"){
        window.location.assign("home.html");
        alert("Logged in as " + username);
    }
    else{
        alert("login unsuccessful");
    }
}