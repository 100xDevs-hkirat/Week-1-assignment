// counter with setInterval

/*let count = 0;

function countUp(){
    count++;
    console.log(count);
}

setInterval(countUp,1000);
*/

//counter with setTimeout

let count = 0;

function countUp(){
    count++;
    console.log(count);
    setTimeout(countUp,1000);
}

countUp();