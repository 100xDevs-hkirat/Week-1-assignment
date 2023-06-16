/*
const date = new Date()
const formattedDate = date.toLocaleString();
console.log(date.toLocaleTimeString())
*/

function clock() {
    // Formatting the local time in 24-hour format
    let date = new Date()
    const options = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    let formattedTime = date.toLocaleTimeString('en-US', options);

    console.log(formattedTime);  // E
}



setInterval(clock, 1000)