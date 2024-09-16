let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let isRunning = false;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

// Start or Stop the stopwatch
startStopBtn.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = "Start";
        startStopBtn.classList.remove("stop");
        startStopBtn.classList.add("start");
    } else {
        timer = setInterval(updateTime, 1000);
        startStopBtn.textContent = "Stop";
        startStopBtn.classList.remove("start");
        startStopBtn.classList.add("stop");
    }
    isRunning = !isRunning;
});

// Reset the stopwatch
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    display.textContent = "00:00:00";
    startStopBtn.textContent = "Start";
    startStopBtn.classList.remove("stop");
    startStopBtn.classList.add("start");
    isRunning = false;
});

// Update the stopwatch display
function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = formatTime(hours, minutes, seconds);
}

// Format time to display as HH:MM:SS
function formatTime(h, m, s) {
    return (
        (h < 10 ? "0" + h : h) +
        ":" +
        (m < 10 ? "0" + m : m) +
        ":" +
        (s < 10 ? "0" + s : s)
    );
}
