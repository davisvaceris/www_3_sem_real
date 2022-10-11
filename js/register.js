// variables 
const username = document.getElementById('username');
const password = document.getElementById('password');
const password_repeat = document.getElementById('password_repeat');
const email = document.getElementById('email');
const register = document.getElementById('register');

// regex expressions 
const email_reg = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i);
const username_regex = new RegExp (/[a-zA-Z][a-zA-Z0-9-_]{5,32}/i);
const password_regex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,32}/i);


register.onclick=() => {
    var us_bol= !username_regex.test(username.value)
    var pas_bol= !password_regex.test(password.value)
    var em= !email_reg.test(email.value);

    if(em){AcceptOrReject(email, "reject", "accept");}
    else{AcceptOrReject(email, "accept", "reject");}

    if(us_bol){AcceptOrReject(username, "reject", "accept");}
    else{AcceptOrReject(username, "accept", "reject");}

    if(pas_bol){AcceptOrReject(password, "reject", "accept");}
    else{AcceptOrReject(password, "accept", "reject");}

    if(!password.value==password_repeat.value||password_repeat.value==null||password_repeat.value==""){AcceptOrReject(password_repeat, "reject", "accept");}
    else{AcceptOrReject(password_repeat, "accept", "reject");}

    if(!em&&!us_bol&&!pas_bol&&password.value==password_repeat.value){
        document.body.style.cursor='wait';
        console.log("Registred successfully");
        window.location.replace('index.html');

    }
};

function AcceptOrReject(element, option1, option2){
    if(element.classList.contains(option1)){}
    else if( element.classList.contains(option2)){element.classList.replace(option2, option1);}
    else{element.classList.add(option1);}
}
