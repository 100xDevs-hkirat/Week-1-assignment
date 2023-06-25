let counterSec = 0
let counterMin = 0
let counterHour = 0

function stopWatch(){

    if(counterSec==60){
        counterMin += 1
        counterSec = 0
    }
    if(counterMin==60){
        counterHour += 1
        counterMin = 0
        counterSec = 0
    }
    counterSec += 1

    console.log(counterHour + ' :' + counterMin + ':' + counterSec)
}

setInterval(stopWatch,1000)