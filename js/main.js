window.onload =()=>{
  
const nav_user = document.getElementById('nav_user');
const nav_login = document.getElementById('nav_login');
const nav_logout = document.getElementById('nav_logout');
//check if user is login 

console.log(sessionStorage.getItem('login')+" values is true")
if(sessionStorage.getItem('login')=='true'){
  LoginLogout(nav_user,nav_login);
}
//if user is NOT logged in
else{
  LoginLogout(nav_login, nav_user);
}
if(getCookie('login') == true) {
  LoginLogout(nav_user,nav_login);
}

//auto hide on scroll nav bar 
document.addEventListener("DOMContentLoaded", function(){
    el_autohide = document.querySelector('.autohide');
    navbar_height = document.querySelector('.navbar').offsetHeight;
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
    }
  }); 
  console.log(getCookie('login'));
  // DOMContentLoaded  end


nav_logout.onclick =() => {
    LoginLogout(nav_login, nav_user);
    deleteAllCookies(); // clear all cookies
    sessionStorage.clear(); //clear all sessionStorage

  };

function LoginLogout( login , logout) {
  login.classList.add('login');
  login.classList.remove('logout');
  logout.classList.add('logout');
  logout.classList.remove('login');
};

// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(';').shift();
// }
function getCookie(cookiename) {
  let name = cookiename + "=";
  let spli = document.cookie.split(';');
  for(var j = 0; j < spli.length; j++) {
    let char = spli[j];
    while (char.charAt(0) == ' ') {
      char = char.substring(1);
    }
    if (char.indexOf(name) == 0) {
      return char.substring(name.length, char.length);
    }
  }
  return "";
}
function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT ;path=/";
  }
}

  //check if user is log in and hide navbar options 

  
};