



function runClock() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let period;

    if (hours >= 0 && hours <= 12)
        period = "AM";
    else
        period = "PM";

    hours / 10 < 1 ? hours = "0" + hours : hours = hours;
    minutes / 10 < 1 ? minutes = "0" + minutes : minutes = minutes;
    seconds / 10 < 1 ? seconds = "0" + seconds : seconds = seconds;

    console.log(hours + ":" + minutes + ":" + seconds + " " + period);



    setTimeout(runClock, 1000);
}
runClock();