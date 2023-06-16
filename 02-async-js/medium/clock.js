const initialTime = new Date().getTime()

const getFormattedNumber = (n) => {
    return String(n).padStart(2, '0')
}

const counter = () => {
    let count = 0
    setInterval(() => {
        const now = new Date(initialTime + (count*1000))
        let hrs = getFormattedNumber(now.getHours())
        let mins = getFormattedNumber(now.getMinutes())
        let secs = getFormattedNumber(now.getSeconds())
        console.log(`${hrs}:${mins}::${secs}`)
        count++
    }, 1000)
}

const counterWithMeridian = () => {
    let count = 0
    setInterval(() => {
        const now = new Date(initialTime + (count*1000))
        let hrs = getFormattedNumber(now.getHours() > 12 ? (now.getHours()-12) : (hrs))
        let mins = getFormattedNumber(now.getMinutes())
        let secs = getFormattedNumber(now.getSeconds())
        console.log(`${hrs}:${mins}::${secs} ${now.getHours() > 12 ? "PM" : "AM"}`)
        count++
    }, 1000)
}

// counter()
counterWithMeridian()