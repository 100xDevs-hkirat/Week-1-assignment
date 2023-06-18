
let count = 0;

function Counter(){
    console.log(count);
    count += 1;
}
setInterval(Counter, 1000);