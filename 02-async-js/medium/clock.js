
function clock() {
    const time24 = new Date().toLocaleTimeString('en-GB');
    const time12 = new Date().toLocaleTimeString('en-US');
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${time12}\t${time24}`);
}

setInterval(clock, 1000);