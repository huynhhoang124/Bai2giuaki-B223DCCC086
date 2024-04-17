// script.js
let countdownTimer;
let initialTime;

document.getElementById('startBtn').addEventListener('click', function () {
    const minutes = parseInt(document.getElementById('minutes').value);
    const seconds = parseInt(document.getElementById('seconds').value);
    initialTime = minutes * 60 + seconds;
    startTimer(initialTime);
});

document.getElementById('resetBtn').addEventListener('click', function () {
    clearInterval(countdownTimer);
    displayTime(initialTime);
});

function startTimer(duration) {
    let time = duration, minutes, seconds;
    clearInterval(countdownTimer);
    countdownTimer = setInterval(function () {
        minutes = parseInt(time / 60, 10);
        seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayTime(minutes + ":" + seconds);

        if (--time < 0) {
            clearInterval(countdownTimer);
            document.getElementById('alarmSound').play();
            alert("Thời gian đã hết!");
        }

    }, 1000);
}

function displayTime(text) {
    document.getElementById('countdownDisplay').textContent = text;
}
