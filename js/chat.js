

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

          var text_1 = document.getElementById('text_1');
          var text_2 = document.getElementById('text_2');
          var text_3 = document.getElementById('text_3');
          var slide_active= document.getElementsByClassName('swiper-slide-active')[0];

          var observer = new MutationObserver(function (event) {
            slide_active= document.getElementsByClassName('swiper-slide-active')[0];
          if(slide_active.classList.contains('first_slide'))hide(text_1,text_2,text_3)
          if(slide_active.classList.contains('second_slide'))hide(text_2,text_3,text_1)
          if(slide_active.classList.contains('third_slide'))hide(text_3,text_1,text_2)
            })

            observer.observe(slide_active, {
            attributes: true, 
            attributeFilter: ['class'],
            childList: false, 
            characterData: false
            })
                    
        break;
}
function hide(element_1, element_2, element_3){
    element_1.classList.remove('hide');
    element_2.classList.add('hide');
    element_3.classList.add('hide');
}