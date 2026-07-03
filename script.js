const PASSWORD = "family";

const loginButton = document.getElementById("loginButton");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");

const passwordScreen = document.getElementById("passwordScreen");
const mainPage = document.getElementById("mainPage");

const arrivalMessage = document.getElementById("arrivalMessage");
const closeArrival = document.getElementById("closeArrival");

loginButton.addEventListener("click", login);

passwordInput.addEventListener("keydown", function(e){

if(e.key==="Enter"){

login();

}

});

function login(){

if(passwordInput.value===PASSWORD){

passwordScreen.style.display="none";

mainPage.classList.remove("hidden");

startCountdown();

}else{

loginError.innerHTML="❌ Неверный пароль";

passwordInput.value="";

}

}

const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

const targetDate=new Date("2026-06-03T22:25:00+02:00");

let countdownTimer;

function startCountdown(){

updateCountdown();

countdownTimer=setInterval(updateCountdown,1000);

}

function updateCountdown(){

const now=new Date();

const diff=targetDate-now;

if(diff<=0){

clearInterval(countdownTimer);

days.innerHTML="000";
hours.innerHTML="00";
minutes.innerHTML="00";
seconds.innerHTML="00";

showArrival();

return;

}

const d=Math.floor(diff/(1000*60*60*24));

const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const m=Math.floor((diff%(1000*60*60))/(1000*60));

const s=Math.floor((diff%(1000*60))/1000);

days.innerHTML=String(d).padStart(3,"0");
hours.innerHTML=String(h).padStart(2,"0");
minutes.innerHTML=String(m).padStart(2,"0");
seconds.innerHTML=String(s).padStart(2,"0");

}

function showArrival(){

if(arrivalMessage){

arrivalMessage.classList.remove("arrivalHidden");

arrivalMessage.style.display="flex";

}

startConfetti();

}

if(closeArrival){

closeArrival.addEventListener("click",function(){

arrivalMessage.style.display="none";

});

}

function startConfetti(){

const container=document.getElementById("confetti");

if(!container) return;

container.innerHTML="";

const colors=[
"#ff3b30",
"#34c759",
"#0a84ff",
"#ffd60a",
"#ff2d55",
"#ffffff",
"#ff9f0a"
];

for(let i=0;i<150;i++){

const piece=document.createElement("div");

piece.style.position="absolute";

piece.style.left=Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.width=(6+Math.random()*10)+"px";

piece.style.height=(8+Math.random()*14)+"px";

piece.style.borderRadius="2px";

piece.style.background=
colors[Math.floor(Math.random()*colors.length)];

piece.style.opacity="0.95";

piece.style.transform=
"rotate("+Math.random()*360+"deg)";

piece.style.transition="none";

container.appendChild(piece);

animatePiece(piece);

}

}

function animatePiece(piece){

const duration=4000+Math.random()*5000;

const endX=(Math.random()*400)-200;

const endY=window.innerHeight+100;

piece.animate(

[
{

transform:"translate(0,0) rotate(0deg)"

},

{

transform:
"translate("+endX+"px,"+endY+"px) rotate(720deg)"

}

],

{

duration:duration,

iterations:1,

easing:"ease-in"

}

);

setTimeout(()=>{

piece.remove();

},duration);

}

window.addEventListener("resize",()=>{

});

console.log("Family Travel Countdown loaded.");
