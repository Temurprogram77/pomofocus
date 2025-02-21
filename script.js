let style_st = document.querySelector(".style");
let time = document.querySelector(".time");
let setting = document.querySelector(".setting");
let okay = document.querySelector(".okay");
let modal = document.querySelector(".settings_modal");
let green = document.querySelector(".green");
let red = document.querySelector(".red");
let dark = document.querySelector(".dark");
let blue = document.querySelector(".blue");
let body = document.querySelector("body");
let active = document.querySelector(".active");
let btns = document.querySelector(".btns");
let full = document.querySelector(".full");
let closeBtn = document.querySelector(".close_btn");
let pomodoro = document.querySelector(".pomadoro");
let short_break = document.querySelector(".short-break");
let long_break = document.querySelector(".long-break");
let bg = document.querySelector(".bg");
let logo = document.querySelector(".logo");
let signModal = document.querySelector(".sign-modal");
let signIn = document.querySelector(".sign-in");

let btn_start = document.querySelector(".start");
let btn_pause = document.querySelector(".pause");
let min = 20;
let sec = 0;
let intervall;

logo.addEventListener("click", () => {
  window.location.reload();
});

signIn.addEventListener("click", () => {
  signModal.classList.toggle('added')
})

pomodoro.addEventListener("click", () => {
  console.log("salom");
  body.style.backgroundColor = "#518a58";
  pomodoro.classList.add("bg");
  short_break.classList.remove("bg");
  long_break.classList.remove("bg");
  time.textContent = "20:00"
  clearInterval(intervall);
  min = 20;
  sec = 0;
  updateDisplay()
});
short_break.addEventListener("click", () => {
  body.style.backgroundColor = "#38858a";
  short_break.classList.add("bg");
  pomodoro.classList.remove("bg");
  long_break.classList.remove("bg");
  time.textContent = "05:00"
  clearInterval(intervall);
  min = 5;
  sec = 0;
  updateDisplay()
});
long_break.addEventListener("click", () => {
  body.style.backgroundColor = "#437EA8";
  long_break.classList.add("bg");
  short_break.classList.remove("bg");
  pomodoro.classList.remove("bg");
  time.textContent = "10:00"
  clearInterval(intervall);
  min = 10;
  sec = 0;
  updateDisplay()
});

red.addEventListener("click", () => {
  body.style.backgroundColor = "#ba4949";
});

green.addEventListener("click", () => {
  body.style.backgroundColor = "#518a58";
});

dark.addEventListener("click", () => {
  body.style.backgroundColor = "#545764";
});

blue.addEventListener("click", () => {
  body.style.backgroundColor = "#38858a";
});

setting.addEventListener("click", () => {
  modal.classList.toggle("tog");
  full.classList.toggle("hidden");
});
full.addEventListener("click", () => {
  modal.classList.remove("tog");
  full.classList.add("hidden");
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("tog");
  full.classList.add("hidden");
});

let pomodoro_inp = document.querySelector('.pomodoro_timer input')
okay.addEventListener('click', ()=>{
  modal.classList.remove("tog");
  full.classList.add("hidden");
  time.textContent = `${pomodoro_inp.value < 9 ? `0${pomodoro_inp.value}`:`${pomodoro_inp.value}`}:00`;
  min = pomodoro_inp.value;
  updateDisplay();
})

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    modal.classList.remove("tog");
    full.classList.add("hidden");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.remove("tog");
    full.classList.add("hidden");
  }
});

btn_pause.addEventListener("click", () => {
  btn_pause.classList.add("hidden");
  btn_start.classList.remove("hidden");
  btn_start.classList.add("style");
  setTimeout(() => {
    clearInterval(intervall);
  }, 100);
});

btn_start.addEventListener("click", () => {
  btn_pause.classList.remove("hidden");
  btn_start.classList.add("hidden");
  btn_pause.classList.add("style");

  if (intervall) clearInterval(intervall);

  intervall = setInterval(() => {
    if (min === 0 && sec === 0) {
      clearInterval(intervall);
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
  time.innerText = `${formattedMin}:${formattedSec}`;
  const music = new Audio("/beep.wav");
  music.play();

  if (formattedSec == 0 && formattedMin == 0) {
    setTimeout(() => {
      time.innerText = "20:00";
    }, 1000);
  }
}

updateDisplay();
