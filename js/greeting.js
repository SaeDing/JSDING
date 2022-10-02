const logininput = document.querySelector("#login-form input");
const loginfrom = document.querySelector("#login-form");
const link = document.querySelector("a")
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USER_NAMEKEY = "username";


function onLoginSubmit(){
    event.preventDefault();
    const logvalue = logininput.value
localStorage.setItem(USER_NAMEKEY,logvalue)

    loginfrom.classList.add(HIDDEN_CLASSNAME)

    paintGreetings(logvalue);
}


function handllink(){
alert("clk");
}

loginfrom.addEventListener("submit",onLoginSubmit);



function paintGreetings(username) {
    greeting.innerText = `안녕하세요 ${username} 님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }

const saveusername = localStorage.getItem(USER_NAMEKEY)

if(saveusername === null){
//show form

loginfrom.classList.remove(HIDDEN_CLASSNAME);
loginfrom.addEventListener("submit", onLoginSubmit);


} else {
    paintGreetings(saveusername);

}

