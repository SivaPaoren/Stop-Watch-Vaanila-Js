var seconds = 00;
var milliSeconds = 000;
var minutes = 00;


var sec = document.getElementById("seconds");
var miliSec = document.getElementById("milliseconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-start");
var buttonReset = document.getElementById("button-start");
var mins = document.getElementById("mins");

var intervalId = 0;
var colorId = 0;

function timer(){
    milliSeconds++;
    if(milliSeconds <= 9){
        miliSec.innerHTML = "0"+ milliSeconds;
    }
    if(milliSeconds > 9){
        miliSec.innerHTML = "0"+milliSeconds;
    }
    if(milliSeconds > 99){
        miliSec.innerHTML = milliSeconds;
    }
    if(milliSeconds > 300){
        seconds++;
        sec.innerHTML = '0'+seconds;
        milliSeconds = 0;
        miliSec.innerHTML = "0"+0;
    }
    if(seconds > 9){
        sec.innerHTML = seconds;
    }

    if(seconds > 60){
       minutes++;
       mins.innerHTML = "0"+minutes;
       seconds = 0;
       sec.innerHTML = "0"+0;
    }
    if(minutes > 9){
        mins.innerHTML = minutes;
    }
}

function start(){
    window.clearInterval(intervalId);
    window.clearInterval(colorId);
    intervalId = window.setInterval(timer);
    buttonStart.innerHTML = "Start";
    colorId = window.setInterval(setColor,500);
    
}

function stop(){
    window.clearInterval(intervalId);
    window.clearInterval(colorId);
    buttonStart.innerText = "Resume";
    
}

function reset(){
    stop();
    buttonStart.innerText = "Start";
    milliSeconds = "00";
    seconds = "00";
    sec.innerHTML = seconds;
    miliSec.innerHTML = milliSeconds;
}

function startStopDisable(a){
    a.disabled = true;
}

function setColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#"+ randomColor;
}
