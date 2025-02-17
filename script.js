let style_st = document.querySelector(".style");
let time = document.querySelector(".time");
let setting = document.querySelector(".setting");
let modal = document.querySelector(".settings_modal");

let btn_start = document.querySelector(".start");
let btn_pause = document.querySelector(".pause");
let min = 20;
let sec = 0;
let intervall;

setting.addEventListener("click", ()=>{

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
