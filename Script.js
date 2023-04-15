var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 5)
    greet = 'Good Night 🌃';
      
else if (hrs >= 5 && hrs <= 12)
    greet = 'Good Morning 🌅';  
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon ☀️';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening 🌙';

document.getElementById('Greetings').innerHTML = greet ;
setInterval(()=>{
let a= new Date();
let time = a.getHours() + ":" + a.getMinutes() + ":" +a.getSeconds();
let day = a.getDate() +"/"+ (a.getMonth()+1) + "/" + a.getFullYear();

document.getElementById('time').innerHTML = time +"   " + day ;}

,1000);
