let currTime = new Date();
let time = new Date(currTime);
time.setHours(0,0,0,0);
time = currTime - time;

const callback = () => {
    time += 1000;
    let am_pm = "";
    const hours = parseInt(Math.floor(time / (1000 * 60 * 60)));
    const minutes = parseInt(Math.abs(Math.floor(hours * 60 - (time / (1000 * 60)))) - 1);
    const seconds = parseInt(Math.abs(Math.floor((time / 1000) - (hours * 60 * 60 + minutes * 60) )));
    if(hours <= 12) {
        am_pm = "AM";
    } else {
        am_pm = "PM"
    }
    console.log(`\n\n${hours}:${minutes}:${seconds}`);
    console.log(`${hours - 12}:${minutes}:${seconds} :: ${am_pm}`)
}

const clock = (_) => {
    setInterval(callback, 1000);
}

clock()
