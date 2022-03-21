const seconds = document.getElementById('seconds') as HTMLElement
const minutes = document.getElementById('minutes')as HTMLElement
const hours = document.getElementById('hours') as HTMLElement
const days = document.getElementById('days') as HTMLElement

let progressValue = 0
function timer() {
    let time = new Date()
    let secondsValue:number|string = time.getSeconds()
    if (secondsValue < 10) {
        secondsValue = '0'.concat(String(secondsValue))   
    }
    let minutesValue:number|string = time.getMinutes()
    if (minutesValue < 10) {
        minutesValue = '0'.concat(String(minutesValue))  
    }
    let hoursValue:number|string = time.getHours()
    if (hoursValue < 10) {
        hoursValue = '0'.concat(String(hoursValue))  
    }
    let daysValue:number|string = time.getDate()
    if (daysValue < 10) {
        daysValue = '0'.concat(String(daysValue))  
    }
    seconds.innerHTML =`${secondsValue}`
    minutes.innerHTML = `${minutesValue}`
    hours.innerHTML = `${hoursValue}`
    days.innerHTML = `${daysValue}`
   
    if (progressValue > 100) {
        progressValue = 0
    }
}
 setInterval(timer, 1000)