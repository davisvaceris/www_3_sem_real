window.onload =()=>{
  
const nav_user = document.getElementById('nav_user');
const nav_login = document.getElementById('nav_login');
const nav_logout = document.getElementById('nav_logout');
//auto hide on scroll nav bar 
document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
    // document.body.style.paddingTop = navbar_height + 'px';
  
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
      // window.addEventListener
    }
    // if
  
  }); 
  console.log(getCookie('login'));
  // DOMContentLoaded  end
  //logout cookies clear event
  if(getCookie('login') == true) {
    LoginLogout(nav_user,nav_login);
  }

nav_logout.onclick =() => {
    LoginLogout(nav_login, nav_user);
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

  //check if user is log in and hide navbar options 

  
};