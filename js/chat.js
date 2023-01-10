

// checks page 
var htmlnamefull= document.URL;
let htmlIndex = htmlnamefull.lastIndexOf("/")+1;
var htmlname= htmlnamefull.substring(htmlIndex);
switch (htmlname)
{
    case 'chat.html':
        var txtarea = document.getElementById('txtarea')
        var send = document.getElementById('send');
        txtarea.style['height']="200px";

    break;
    case 'news.html':
        var swiper = new Swiper(".mySwiper", {
            pagination: {
              el: ".swiper-pagination",
              type: "progressbar",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
          
          
        break;
}