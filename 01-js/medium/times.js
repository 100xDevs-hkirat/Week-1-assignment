/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS

0.06920000165700912
*/


function calculateTime(n) {
    
    const startTime = performance.now();

    let sum =0;

    for(let i=0;i<n;i++){
        sum = sum + i;
    }

    const endTime = performance.now();

    const time = endTime-startTime;

    return time;
}

console.log(calculateTime(100000));