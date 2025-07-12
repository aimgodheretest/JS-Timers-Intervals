//setTimeout function is fundamental part of the js which schedules a single execution after a specified delay
// setTimeout(function () {
//   console.log("hello");
// }, 3000);

// SetInterval() is a JavaScript function that allows you to schedule a function or expression to be executed repeatedly at specified intervals
// setInterval(function () {
//   console.log("Hello on loop");
// }, 2000);

//Start count from 10 and stop when it touches 1;
let count = 10;

let interval = setInterval(function () {
  if (count >= 1) {
    console.log(count);
    count--;
  } else {
    clearInterval(interval); //this line will clear/stop the interval function.
  }
}, 1000);
