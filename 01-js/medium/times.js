/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

const sumTill = (n) => {
    let sum = 0
    for(i=1;i<=n;i++) {
        sum += i
    }
    return sum
}

function calculateTime(n) {
    const start = new Date().getTime()
    sumTill(n)
    const end = new Date().getTime()
    return (end-start)/1000
}