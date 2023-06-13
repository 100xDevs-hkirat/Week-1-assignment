function clock(){

    const currTime = new Date();
    let hours = currTime.getHours();
    let minutes = currTime.getMinutes();
    let seconds = currTime.getSeconds();

    const amOrPm = hours >= 12? 'PM' : 'AM';

    // format convertion

    hours = hours % 12;
    hours = hours ? hours : 12  // if hours are there it displays hours or else it shows 12

    minutes = minutes <10 ? '0' + minutes: minutes;
    seconds = seconds<10 ? '0' + seconds: seconds;

    // Display the time in 2 formats: HH:MM:SS and HH:MM:SS AM/PM

    const format1 = hours + ': ' + minutes +': ' + seconds;
    const format2 = hours + ': ' + minutes + ': ' + seconds+ ' ' + amOrPm;

    console.log(format1);
    console.log(format2);
}

setInterval(clock, 1000);