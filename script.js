let style_st = document.querySelector(".style");
let time = document.querySelector(".time");
let setting = document.querySelector(".setting");
let modal = document.querySelector(".settings_modal");
let green = document.querySelector(".green");
let red = document.querySelector(".red");
let dark = document.querySelector(".dark");
let blue = document.querySelector(".blue");
let body = document.querySelector("body");
let active = document.querySelector(".active");

let btn_start = document.querySelector(".start");
let btn_pause = document.querySelector(".pause");
let min = 20;
let sec = 0;
let intervall;

red.addEventListener('click', ()=>{
    body.style.backgroundColor = "#ba4949";
    active.style.backgroundColor = "#A44E4E";
})

green.addEventListener('click', ()=>{
    body.style.backgroundColor = "#518a58";
    active.style.backgroundColor = "#548059";
})

dark.addEventListener('click', ()=>{
    body.style.backgroundColor = "#545764";
    active.style.backgroundColor = "#565963";
})

blue.addEventListener('click', ()=>{
    body.style.backgroundColor = "#38858a";
    active.style.backgroundColor = "#417B80";
})

setting.addEventListener("click", ()=>{
    modal.classList.toggle("tog");
})

btn_pause.addEventListener("click", () => {
  btn_pause.classList.add("hidden");
  btn_start.classList.remove("hidden");
  btn_start.classList.add("style");
  setTimeout(() => {
    time.innerText = "20:00";
    clearInterval(intervall)
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
  if (formattedSec == 0 && formattedMin == 0) {
    setTimeout(() => {
      time.innerText = "20:00";
    }, 1000);
  }
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
