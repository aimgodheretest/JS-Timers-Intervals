let daysEl = document.querySelector("#days");
let hoursEl = document.querySelector("#hours");
let minutesEl = document.querySelector("#minutes");
let secondsEl = document.querySelector("#seconds");

//Set your target date here-
const targetDate = new Date("2025-12-31T23:59:59").getTime();

function updateCountDown() {
  let now = new Date().getTime();
  let distance = targetDate - now;

  if (distance < 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountDown();
setInterval(updateCountDown, 1000);
