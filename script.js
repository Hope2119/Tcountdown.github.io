
let countdownInterval;

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// User input for the date
let newYears = prompt("Please enter Your birthday (example: 9 feb 2024)");

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    if(totalSeconds > 0) {
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins= Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours;
        minsEl.innerHTML =  mins;
        secondsEl.innerHTML= seconds;
    } else {
        clearInterval(countdownInterval); // Stop the countdown
        daysEl.innerHTML = "0";
        hoursEl.innerHTML = "0";
        minsEl.innerHTML = "0";
        secondsEl.innerHTML= "0";
        
        // Display a message when the countdown ends
        alert("HAPPY BIRTHDAY!!");
    }
}

// Start the countdown
countdownInterval = setInterval(countdown, 1000);

// Stop button
document.getElementById('stopButton').addEventListener('click', function() {
    clearInterval(countdownInterval);
});

// Reset button
document.getElementById('resetButton').addEventListener('click', function() {
    newYears = prompt("Please enter the new date (format: 5 August 2024)");
    countdownInterval = setInterval(countdown, 1000);
});
