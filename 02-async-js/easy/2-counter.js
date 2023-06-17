// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

var count = 0;
for(var i=1; i<1000; i++){
    setTimeout(() => {
        count+=1;
        console.log(`Time passed ${count}`);
    }, i*1000)
}






































































// (Hint: setTimeout)