// Key used in localStorage
const TIMER_KEY = "speedrun_start_time";
let timerInterval = null;

// Start the timer if not already started
function startThingy() {
    if (!localStorage.getItem(TIMER_KEY)) {
        localStorage.setItem(TIMER_KEY, Date.now());
    }
    runTimer();
}

// Stop the timer
function stopThingy() {
    localStorage.removeItem(TIMER_KEY);
    clearInterval(timerInterval);
}

// Update the timer display
function runTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const startTime = parseInt(localStorage.getItem(TIMER_KEY), 10);
        if (!startTime) return;

        const elapsed = Date.now() - startTime;
        const minutes = String(Math.floor(elapsed / 60000)).padStart(2, "0");
        const seconds = String(Math.floor((elapsed % 60000) / 1000)).padStart(2, "0");
        const milliseconds = String(elapsed % 1000).padStart(3, "0");

        document.getElementById("timer").textContent = `${minutes}:${seconds}.${milliseconds}`;
    }, 10);
}

// Auto-run if timer exists
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem(TIMER_KEY)) {
        runTimer();
    }
});
