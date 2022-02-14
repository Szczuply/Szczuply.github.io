setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')



function setClock(){
    const currenDate = new Date()
    const sencondsRatio = currenDate.getSeconds() / 60
    const minutesRatio = (sencondsRatio + currenDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currenDate.getHours()) / 12
    setRotation(secondHand, sencondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
    console.log(currenDate)
    console.log(currenDate.getSeconds())
    console.log(currenDate.getMinutes())
    console.log(currenDate.getHours())
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()