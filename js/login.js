//import {cript} from './const.js';

const username_regex = new RegExp (/[a-zA-Z][a-zA-Z0-9-_]{5,32}/gi);
const password_regex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,32}/gi);
//const CryptoJS = require('crypto-js');
var username = document.getElementById("username");
var password = document.getElementById("password");
var loginh = document.getElementById("login");
var rememberMe = document.getElementById("rememberMe");

function login(username, password) {
    // check username 
    if (!username_regex.test(username)&&username!==("Davis")) {
        alert("Please enter a username");
    }
    else{
        // if correct username check password
         if(!password_regex.test(password)&&password!==("Vaceris")){
            alert("Please enter a password");
        }
        else{
            // creates cookie or session on remember option 
            if(rememberMe.checked) {
                setCookie("username",username,5)
                setCookie("login",true,5)
            }
            else{
                sessionStorage.setItem("username",username)
                sessionStorage.setItem("login", true)
            }
            document.body.style.cursor='wait';
            // send to main page
            setTimeout(()=>{window.location.replace('index.html');},1000);
        }
    }
        
function setCookie(username, value, expiry) {
    const date = new Date();
    date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
    var expires = "expires="+date.toUTCString();
    document.cookie = username + "=" + value + ";" + expires + ";path=/";
  }
}
loginh.onclick=()=>{
    login(username.value,password.value);
}