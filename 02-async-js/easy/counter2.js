// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let value=1;

function timer(){
    console.log(value);
    value++;
    setTimeout(timer,1000);
}

timer();