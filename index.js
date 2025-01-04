const hourE1=document.getElementById("hour")
const minE1=document.getElementById("minutes")
const secondsE1=document.getElementById("second")
const ampmE1=document.getElementById("ampm");


function updateClock(){
let h=new Date().getHours();
let m=new Date().getMinutes()
let s=new Date().getSeconds()
;
let ampm="AM"
if(h>12){
h=h-12
ampm="PM"
}
hourE1.innerText=h;
minE1.innerText=m;
secondsE1.innerText=s;
ampmE1,(innerText=ampm);
setTimeout(updateClock,1000);
}
updateClock()