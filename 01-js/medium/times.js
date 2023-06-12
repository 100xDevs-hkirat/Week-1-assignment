/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function sum1toN(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    console.log(sum);
}

function calculateTime(n) {
    const beforeTime = new Date();
    sum1toN(n)
    const afterTime = new Date();
    const timeDiff = afterTime - beforeTime;
    console.log("Time taken in milliseconds: " + timeDiff + ", in seconds: " + (timeDiff / 1000));
}

calculateTime(1000000000);
// Time taken in milliseconds: 949, in seconds: 0.949
