let age = window.prompt("What is your age?");

window.onload = function () {
  let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let currentDate = new Date();
  let currentDay = currentDate.getDay();
  document.body.innerHTML = "Today is: " + weekday[currentDay];
}
