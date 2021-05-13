var seconds = 00;
var milliSeconds = 000;
var minutes = 00;
var hours = 00;
var intervalId = 0;
var colorId = 0;

const secondsFromHtml = document.getElementById("seconds");
const milliSecFromHtml = document.getElementById("milliseconds");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-start");
const buttonReset = document.getElementById("button-start");
const minutesFromHtml = document.getElementById("minutes");
const hoursFromHtml = document.getElementById("hours");

function milliSecondsTimer() {
  milliSeconds++;
  if (milliSeconds <= 9) {
    milliSecFromHtml.innerHTML = "0" + milliSeconds;
  }
  if (milliSeconds > 9) {
    milliSecFromHtml.innerHTML = "0" + milliSeconds;
  }
  if (milliSeconds > 99) {
    milliSecFromHtml.innerHTML = milliSeconds;
  }
  if (milliSeconds > 300) {
    seconds++;
    secondsFromHtml.innerHTML = "0" + seconds;
    milliSeconds = 0;
    milliSecFromHtml.innerHTML = "0" + 0;
  }
}

function timer() {
  milliSecondsTimer();
  secondsTimer();
  minutesTimer();
}

function secondsTimer() {
  if (seconds > 9) {
    secondsFromHtml.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    minutesFromHtml.innerHTML = "0" + minutes;
    seconds = 0;
    secondsFromHtml.innerHTML = "0" + 0;
  }
}

function minutesTimer() {
  if (minutes > 9) {
    minutesFromHtml.innerHTML = minutes;
  }
  if (minutes > 59) {
    hours++;
    hoursFromHtml.innerHTML = "0" + hours;
    minutes = 0;
    minutesFromHtml.innerHTML = "0" + 0;
  }
  if (hours > 9) {
    hoursFromHtml.innerHTML = hours;
  }
}

function start() {
  window.clearInterval(intervalId);
  window.clearInterval(colorId);
  intervalId = window.setInterval(timer);
  buttonStart.innerHTML = "Start";
  colorId = window.setInterval(setColor, 500);
}

function stop() {
  window.clearInterval(intervalId);
  window.clearInterval(colorId);
  buttonStart.innerText = "Resume";
}

function resetVariablesToZero() {
  milliSeconds = "000";
  seconds = "00";
  minutes = "00";
  hours = "00";
  minutesFromHtml.innerHTML = minutes;
  secondsFromHtml.innerHTML = seconds;
  hoursFromHtml.innerHTML = hours;
  milliSecFromHtml.innerHTML = milliSeconds;
}

function reset() {
  stop();
  buttonStart.innerText = "Start";
  resetVariablesToZero();
}

function startStopDisable(a) {
  a.disabled = true;
}

function setColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}
