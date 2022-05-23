
var current_time = document.getElementById("time");
setInterval(()=>{
    var time = new Date();
    current_time.innerHTML= `${time.getHours()%12}:${time.getMinutes()}:${time.getSeconds()}`;
    // current_time.innerText += "hello";
},1000);


