/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let start = new Date();

    let num = 0;

    for(let i = 1; i <= n; i++)
        num += i;

    let end = new Date();

    return Math.ceil(Math.abs((end - start) / 1000));
}

const no = 100; // 100 // 100000 // 1000000000

const diff = calculateTime(no);

console.log('Time taken to calculate 1 to', no, 'is:', diff, 'seconds');