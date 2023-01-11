

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
      case 'profile.html':
        const password_regex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,32}/gi);
        const email_reg = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i);
        const name_surname_regex = new RegExp(/[A-Z][a-z]+/gi);
        var grettings= document.getElementById('hello');
        var btn = document.getElementById('register');

        grettings.innerHTML = 'Hello '+sessionStorage.getItem('username') + '!';
        // check after save 
        btn.onclick = () => {
          var name = document.getElementById('nameInput');
          var surname = document.getElementById('surnameInput');
          var email = document.getElementById('emailInput');
          var passw = document.getElementById('passwordInput');
          var passwrepeat = document.getElementById('password_repeatInput');
          // 0== false
          var accept= [0,0,0,0,0]
          console.log(!name_surname_regex.test(name.value))
          console.log(name.value)
          console.log(name.value!='')
          console.log(!name_surname_regex.test(name.value)&&name.value!='');
          var nsrn=!name_surname_regex.test(name.value);
          var nsrs=!name_surname_regex.test(surname.value);
          var ere=!email_reg.test(email.value);
          var prp =!password_regex.test(passw.value);

            if(nsrn&&name.value!=''){
              console.log("NAME");
              AcceptOrReject(name, "reject", "accept");
              accept[0]=false;
            }
            else{
              AcceptOrReject(name, "accept", "reject");
              accept[0]=true;
            }

            
            if(nsrs&&surname.value!=""){
              console.log("SURNAME");
              AcceptOrReject(surname, "reject", "accept");
              accept[1]=false;
            }
            else{
              AcceptOrReject(surname, "accept", "reject");
              accept[1]=true;
            }
            if(ere&&email.value!=""){
              console.log("EMAIL");
              AcceptOrReject(email, "reject", "accept");
              accept[2]=false;
            }
            else{
              AcceptOrReject(email, "accept", "reject");
              accept[2]=true;
              
            }
            if(prp&&passw.value!=""){
              console.log("PASSW");
              AcceptOrReject(passw, "reject", "accept");
              accept[3]=false;
            }
            else{
              AcceptOrReject(passw, "accept", "reject");
              accept[3]=true;
            }
            if(!passw.value==passwrepeat.value||passwrepeat.value==null||passwrepeat.value==""&&passw.value!=""){
              console.log("RE PASSWORD");
              AcceptOrReject(passwrepeat, "reject", "accept");
              accept[4]=false;
            }
            else{
              AcceptOrReject(passwrepeat, "accept", "reject");
              accept[4]=true;
            }
            if(accept[4]==true&&accept[3]==true&&accept[2]==true&&accept[1]==true&&accept[0]==true){
            
            };
          }


        break;
}
// shwos first elemnt hides rest of elemtns
function hide(element_1, element_2, element_3){
    element_1.classList.remove('hide');
    element_2.classList.add('hide');
    element_3.classList.add('hide');
}
function AcceptOrReject(element, option1, option2){
  if(element.classList.contains(option1)){}
  else if( element.classList.contains(option2)){element.classList.replace(option2, option1);}
  else{element.classList.add(option1);}
}