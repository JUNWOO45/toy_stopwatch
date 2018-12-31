var target = document.querySelector(".target");
var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var reset = document.querySelector(".reset");
var rec = document.querySelector(".rec");
var time = 0;
var flag = false;

start.addEventListener("click", function(){
    flag = true;
    stopWatch();
});

stop.addEventListener("click", function(){
    flag = false;
});

reset.addEventListener("click", function(){
    target.innerHTML = "00:00:00:00";
    flag = false;
    time = 0;
    container.innerText = "";
});

rec.addEventListener("click", function(){
    container.innerHTML += target.innerHTML + "<br>"
});

function stopWatch(){
    if(flag){
        setTimeout(function(){
            time++  
            var milSeconds = time % 10;
            var seconds = Math.floor(time / 10) % 60;
            var minutes = Math.floor(time / 10 / 60) % 60;
            var hours = Math.floor(time / 10 / 60 / 60) % 24;
            if(seconds < 10){
                seconds = "0" + seconds;
            } 
            if(minutes < 10){
                minutes = "0" + minutes;
            } 
            if(hours < 10){
                hours = "0" + hours;
            }
            target.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + "0" + milSeconds;
            
            stopWatch();
        }, 100);
    }
}
