let count = 0;
let second = 15;
let progress = document.querySelector(".progress-fill");
let progressText = document.querySelector(".progress-text");
let body = document.querySelector("body");

let h2 = document.querySelector("h2");

let interval = setInterval(() => {
  if (count <= 99) {
    count++;
    progress.style.width = `${count}%`;
    progressText.textContent = `${count}%`;
  } else {
    h2.textContent = "Downloaded";
    h2.style.color = "green";
    body.textContent = alert("Saved to files");
    clearInterval(interval);
  }
}, (second * 1000) / 100);
