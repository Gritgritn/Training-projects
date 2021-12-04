const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
console.log(hoursEl);

const newYears = '1 Jan 2022';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const TotalSeconds = (newYearsDate - currentDate) / 1000;

    const seconds = Math.floor(TotalSeconds) % 60;

    const minutes = Math.floor(TotalSeconds / 60) % 60;

    const hours = Math.floor(TotalSeconds / 3600) % 24;

    const days = Math.floor(TotalSeconds / 3600 / 24);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
