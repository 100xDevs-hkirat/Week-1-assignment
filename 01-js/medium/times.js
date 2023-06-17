/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function Sum(start, end){
    let total = 0;
    for(var i=start; i<=end; i++){
        total += i;
    }
    return total;
}

function calculateTime(n) {
    let d = new Date();
    let start = Date.now();
//    console.log("Start = ", start);
    let retVal = Sum(1,n);
    d = new Date();
    let end = Date.now();
//    console.log("End = ", end);
    let diff = (end-start)/1000;
//    console.log("SUM = ",retVal, " Time required = ", diff);
    return diff;
}

//calculateTime(100);
//calculateTime(1000);
//calculateTime(10000);
//calculateTime(100000);
//calculateTime(10000000);
//calculateTime(9000000000);
