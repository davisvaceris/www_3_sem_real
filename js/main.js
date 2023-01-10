
  
const nav_user = document.getElementById('nav_user');
const nav_login = document.getElementById('nav_login');
const nav_logout = document.getElementById('nav_logout');

//check if user is login 
if(getCookie('login') == 'true'||sessionStorage.getItem('login')=='true'){
  HideShowElement(nav_user,nav_login,'login','logout');
}
//if user is NOT logged in
else{
  HideShowElement(nav_login, nav_user,'login','logout');
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
// DOMContentLoaded  end


nav_logout.onclick =() => {
    HideShowElement(nav_login, nav_user,'login','logout');
    deleteAllCookies(); // clear all cookies
    sessionStorage.clear(); //clear all sessionStorage
    window.location.replace('index.html');

  };

function HideShowElement( showElement , hideElement, classShow, classHide) {
  showElement.classList.add(classShow);
  showElement.classList.remove(classHide);
  hideElement.classList.add(classHide);
  hideElement.classList.remove(classShow);
};

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

// 
// MODAL for privacy and cookies  in footer
//

  // Get the modal

  var span = document.getElementById("modal-close");
  var span2 = document.getElementsByClassName("modal-close-bottom")[0];
  var Cookiemodal = document.getElementById("ModalCookie");
  var PrivAndCook= document.getElementById("PrivAndCook");
  // When the user clicks on the button, open the modal
  PrivAndCook.onclick=()=>{
    Cookiemodal.style.display = "block";
  };

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  Cookiemodal.style.display = "none";
}
span2.onclick = function() {
  Cookiemodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == Cookiemodal) {
    Cookiemodal.style.display = "none";
  }
} 


// cart check
// hide if session prodyucts are empty 
function IsSessionProducts(){
  if(JSON.parse(sessionStorage.getItem("products"))!=null)
   return true;
  return false;
  
}
var fullCart= document.getElementById('cartFull');
var emptyCart= document.getElementById('cartEmpty');
showCart();
setInterval(showCart, 3000);
function showCart(){
  if(JSON.parse(sessionStorage.getItem("products"))!=null){
    HideShowElement(fullCart,emptyCart,'show','hide');

  }
  else{
    HideShowElement(emptyCart,fullCart,'show','hide');
  }
}