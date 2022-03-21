"use strict";
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const days = document.getElementById('days');
let progressValue = 0;
function timer() {
    let time = new Date();
    let secondsValue = time.getSeconds();
    if (secondsValue < 10) {
        secondsValue = '0'.concat(String(secondsValue));
    }
    let minutesValue = time.getMinutes();
    if (minutesValue < 10) {
        minutesValue = '0'.concat(String(minutesValue));
    }
    let hoursValue = time.getHours();
    if (hoursValue < 10) {
        hoursValue = '0'.concat(String(hoursValue));
    }
    let daysValue = time.getDate();
    if (daysValue < 10) {
        daysValue = '0'.concat(String(daysValue));
    }
    seconds.innerHTML = `${secondsValue}`;
    minutes.innerHTML = `${minutesValue}`;
    hours.innerHTML = `${hoursValue}`;
    days.innerHTML = `${daysValue}`;
    if (progressValue > 100) {
        progressValue = 0;
    }
}
setInterval(timer, 1000);
