let style_st = document.querySelector(".style");
let time = document.querySelector(".time");

let btn_start = document.querySelector(".start");
let btn_pause = document.querySelector(".pause");
let timerDisplay = document.querySelector(".timer");
let min = 20;
let sec = 0;
let interval;

btn_start.addEventListener("click", () => {
  btn_pause.classList.remove("hidden");
  btn_start.classList.add("hidden");
  btn_pause.classList.add("style");

  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    if (min === 0 && sec === 0) {
      clearInterval(interval);
      return;
    }

    if (sec === 0) {
      min--;
      sec = 59;
    } else {
      sec--;
    }

    updateDisplay();
  }, 1000);
});

function updateDisplay() {
  let formattedMin = min < 10 ? "0" + min : min;
  let formattedSec = sec < 10 ? "0" + sec : sec;
  timerDisplay.innerText = `${formattedMin}:${formattedSec}`;
}

updateDisplay();

// btn_start.addEventListener("click", () => {
//   btn_pause.classList.remove("hidden");
//   btn_start.classList.add("hidden");
//   btn_pause.classList.add("style");
//   setInterval(() => {
//     let min = 25;
//     let sec = 60;

//   }, 1000);
// });
btn_pause.addEventListener("click", () => {
  btn_start.classList.remove("hidden");
  btn_pause.classList.add("hidden");
  btn_start.classList.add("style");
});

let minutes = 20;
let seconds = 0;
let interval;

function startTimer() {
  if (interval) clearInterval(interval);
  interval = setInterval(() => {
    if (minutes === 0 && seconds === 0) {
      clearInterval(interval);
      alert("Vaqt tugadi!");
      return;
    }

    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    updateDisplay();
  }, 1000);
}

function updateDisplay() {
  let min = minutes < 10 ? "0" + minutes : minutes;
  let sec = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("timer").innerText = `${min}:${sec}`;
}

document.getElementById("startBtn").addEventListener("click", startTimer);

updateDisplay();
