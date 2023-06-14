/**
 * Displays a counter in console, like a timer
 */
const counter = () => {
    let count = 0;
    setInterval(()=>{
        console.clear()
        console.log(count++)
    },1000)
}

counter()