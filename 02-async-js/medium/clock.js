function printTime() {
    console.clear();
    const currentDate = new Date();

    let currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    let amPm = 'AM';
    if(currentHours >= 12) {
        amPm = "PM";
        if(currentHours > 12) {
            currentHours -= 12;
        }
    }
    console.log(`Current time: ${currentHours}:${currentMinutes}:${currentSeconds} ${amPm}`);
}

setInterval(printTime,1000);