// 12 hour format

const format1 = () => {
    setInterval(() => {
        time = new Date().toLocaleTimeString()
        console.clear()
        console.log(time)
    }, 1000)
}



// 24 hour format

const format2 = () => {
    setInterval(() => {

        let time = {
            hours: new Date().getHours(),
            min: new Date().getMinutes(),
            sec: new Date().getSeconds(),

        }
        console.clear()
        console.log(`${time.hours}:${time.min}:${time.sec}`)

    }, 1000)
}

//call any function to start the clock