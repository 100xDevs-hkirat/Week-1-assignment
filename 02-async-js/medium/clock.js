function clock() {
    const time = new Date();
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const suffix = hours > 12 ? 'pm' : 'am';

    if (suffix === 'pm') {
        hours = hours % 12;
    }

    console.log(hours, ':', minutes, '::', seconds, ' ', suffix);
}

setInterval(clock, 1000)