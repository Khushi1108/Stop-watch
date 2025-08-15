
let startTime;
let interval;
let elapsedTime = 0;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function timeToString(time) {
  const hrs = String(Math.floor(time / 3600000)).padStart(2, "0");
  const mins = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
  const secs = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  interval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 1000);
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(interval);
  startBtn.disabled = false;
}

function resetTimer() {
  clearInterval(interval);
  display.textContent = "00:00:00";
  elapsedTime = 0;
  startBtn.disabled = false;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
