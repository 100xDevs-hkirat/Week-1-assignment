/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let timeBefore = Date.now();
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    let timeAfter = Date.now();
    let elapsedTime = timeAfter - timeBefore;

    console.log("Sum:", sum);
    console.log("Time taken to calculate sum from 1 to", n, "is:", elapsedTime, "milliseconds");
}
