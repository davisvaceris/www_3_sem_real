const username_regex = new RegExp (/[a-zA-Z][a-zA-Z0-9-_]{5,32}/gi);
const password_regex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,32}/gi);
var username = document.getElementById("username");
var password = document.getElementById("password");
var loginh = document.getElementById("login");
var rememberMe = document.getElementById("rememberMe");

function login(username, password) {
    if (!username_regex.test(username)&&username!==("Davis")&&username!==("Inga")) {
        alert("Please enter a username");
    }
    else{
         if(!password_regex.test(password)&&password!==("Vaceris")&&password!==("Vilumsone")){
            alert("Please enter a password");
        }
        else{
            if(rememberMe.checked) {
                Cookies.set("username",username,{expires:7});
                Cookies.set("login",true,{expires:7});
            }
            else{
                sessionStorage.setItem("username",username)
                sessionStorage.setItem("login", true)
            }
            document.body.style.cursor='wait';
            setTimeout(()=>{window.location.replace('home.html');},3000);
        }
    }
}
loginh.onclick=()=>{
    login(username.value,password.value);
}