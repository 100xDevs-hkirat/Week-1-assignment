let hour = new Date().getHours()
let minute = new Date().getMinutes()
let second = new Date().getSeconds()

function clock(){
    console.clear();
    hour = new Date().getHours()
    minute = new Date().getMinutes()
    second = new Date().getSeconds()

    console.log(hour + ':' + minute + ':' + second + ' ');
}

setInterval(clock, 1000);