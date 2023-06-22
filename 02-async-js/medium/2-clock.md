

// function counterFunction() {
//     setInterval(() => {
//         const date = new Date()
//         const hr = date.getHours()
//         const min = date.getMinutes()
//         const sec = date.getSeconds()
//         // console.log( date)
//         console.log(`HH:MM:SS AM/PM :${date.toLocaleTimeString()}`)
//         // console.log(date.toDateString())
//         // console.log(date.toTimeString())
//         console.log(`HH:MM:SS :${hr}:${min}:${sec}`)
//     }, 1000)
// }
// counterFunction()



function counter(count, duration) {
    if (count < duration) {
        setTimeout(() => {
            const date = new Date()
            const hr = date.getHours()
            const min = date.getMinutes()
            const sec = date.getSeconds()
            console.log(`HH:MM:SS AM/PM :${date.toLocaleTimeString()}`)
            console.log(`HH:MM:SS :${hr}:${min}:${sec}`)
            count += 1
        }, 1000)
    }
}

counter(0, 10)