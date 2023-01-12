

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
        const password_regex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,32}/);
        const email_reg = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
        const name_surname_regex = new RegExp(/([A-Z][a-z]+)([\-\s]([A-Z][a-z]+))*/);
        var grettings= document.getElementById('hello');
        const btn = document.getElementById('register');

        grettings.innerHTML = 'Hello '+sessionStorage.getItem('username') + '!';
        
          const name = document.getElementById('nameInput');
          const surname = document.getElementById('surnameInput');
          const email = document.getElementById('emailInput');
          const passw = document.getElementById('passwordInput');
          const passwrepeat = document.getElementById('password_repeatInput');
          const info = document.getElementById('info');
        // check after save 
        btn.onclick = () => {
          // 0== false
          var accept= [0,0,0,0,0]
          var nsrn=!name_surname_regex.test(name.value);
          var nsrs=!name_surname_regex.test(surname.value);
          var ere=!email_reg.test(email.value);
          var prp =!password_regex.test(passw.value);

            if(nsrn&&name.value!=""){
              AcceptOrReject(name, "reject", "accept");
              accept[0]=false;
            }
            else{
              AcceptOrReject(name, "accept", "reject");
              accept[0]=true;
            }

            
            if(nsrs&&surname.value!=""){
              AcceptOrReject(surname, "reject", "accept");
              accept[1]=false;
            }
            else{
              AcceptOrReject(surname, "accept", "reject");
              accept[1]=true;
            }
            if(ere&&email.value!=""){
              AcceptOrReject(email, "reject", "accept");
              accept[2]=false;
            }
            else{
              AcceptOrReject(email, "accept", "reject");
              accept[2]=true;
              
            }
            if(prp&&passw.value!=""){
              AcceptOrReject(passw, "reject", "accept");
              accept[3]=false;
            }
            else{
              AcceptOrReject(passw, "accept", "reject");
              accept[3]=true;
            }
            if(passw.value!=passwrepeat.value||passwrepeat.value==""&&passw.value!=""){
              AcceptOrReject(passwrepeat, "reject", "accept");
              accept[4]=false;
            }
            else{
              AcceptOrReject(passwrepeat, "accept", "reject");
              accept[4]=true;
            }
            // check all fields and if not empty

            // if emty fields do nothing 
            if(passw.value==""&&passwrepeat.value==""&&email.value==""&&name.value==""&&surname.value==""){
              
              info.innerHTML='Nothing to change';
            }
            else if(accept[4]==true&&accept[3]==true&&accept[2]==true&&accept[1]==true&&accept[0]==true){
              passw.value="";
              email.value="";
              surname.value="";
              name.value="";
              passwrepeat.value="";
              info.innerHTML='Info is changed!';
            }
            else{
                info.innerHTML='Not correct fields';
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