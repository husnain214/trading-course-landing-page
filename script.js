const daysEl = document.querySelectorAll (".days") 
const hoursEl = document.querySelectorAll (".hours") 
const minutesEl = document.querySelectorAll (".minutes") 
const secondsEl = document.querySelectorAll (".seconds") 
const fixedCountdown = document.querySelector (".fixed-countdown")
const imageSlider = document.querySelector ("#image-container")
const sliderImage = document.querySelector (".image-container img")


// IMAGE SLIDER BUTTONS

const prevBtn = document.querySelector ("#prev")
const nextBtn = document.querySelector ("#next")

let windowScrollY = window.scrollY
let countDownTime = new Date ("Oct 5, 2022, 12:00:00")
let countdownShowCounter = 0
let imageWidth = sliderImage.width
let sliderCounter = 1

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
    
    setTimeout (() => fixedCountdown.style.opacity = "0", 10000)
}

document.addEventListener ("scroll", countdownShow)

setInterval (renderTime, 1000)
setTimeout (() => fixedCountdown.style.opacity = "0", 10000)

nextBtn.addEventListener ("click", () => {
    imageSlider.style.transition = `transform 0.4s ease-in-out`
    sliderCounter++
    imageSlider.style.transform = `translateX(${-imageWidth * sliderCounter}px)`
})

prevBtn.addEventListener ("click", () => {
    imageSlider.style.transition = `transform 0.4s ease-in-out`
    sliderCounter--
    imageSlider.style.transform = `translateX(${-imageWidth * sliderCounter}px)`
})

imageSlider.addEventListener ("transitionend", () => {
    (sliderCounter > 0) ? prevBtn.style.display = "block" : prevBtn.style.display = "none";
    (sliderCounter === 8) ? nextBtn.style.display = "none" : nextBtn.style.display = "block";
})
