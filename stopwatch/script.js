let secondsElapsed = 0;
let interval = null;

const time = document.getElementById("time");

const padStart = (value) => {
    return String(value).padStart(2, "0")
}

const setTime = () => {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`
}

const timer = () => {
    secondsElapsed++
    setTime()
}

const startClock = () => {
    if (interval) stopClock();
    interval = setInterval(timer,1000)
}

const stopClock = () => {
    clearInterval(interval)
}

const resetClock = () => {
    stopClock()
    secondsElapsed = 0;
    setTime()
}