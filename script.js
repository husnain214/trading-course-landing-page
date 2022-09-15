const daysEl = document.querySelectorAll (".days") 
const hoursEl = document.querySelectorAll (".hours") 
const minutesEl = document.querySelectorAll (".minutes") 
const secondsEl = document.querySelectorAll (".seconds") 
const fixedCountdown = document.querySelector (".fixed-countdown")

let windowScrollY = window.scrollY
let countDownTime = new Date ("Oct 5, 2022, 12:00:00")
let countdownShowCounter = 0

function updateTime () {
    let currentTime = new Date ().getTime()

    let remainingTime = countDownTime - currentTime

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return {days, hours, minutes, seconds}
}

function renderTime () {
    let newTime = updateTime ()

    daysEl.forEach (dayEl => dayEl.textContent = newTime.days)
    hoursEl.forEach (hourEl => hourEl.textContent = newTime.hours)
    minutesEl.forEach (minuteEl => minuteEl.textContent = newTime.minutes)
    secondsEl.forEach (secondEl => secondEl.textContent = newTime.seconds)
}

function countdownShow () {
    if (window.scrollY > windowScrollY) {
        fixedCountdown.style.opacity = "0"

        windowScrollY = window.scrollY
    }
    else  {
        fixedCountdown.style.opacity = "1"
    }
}

document.addEventListener ("scroll", countdownShow)

setInterval (renderTime, 1000)

