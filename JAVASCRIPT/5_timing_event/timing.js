function setTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;
}

let valid;
function startClock() {
    valid = setInterval(setTime, 1000);
}

function stopClock() {
    clearInterval(valid);
}

setTime();