/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function getCurrentTime(){
    return Math.floor(Date.now() / 1000);

}

function calculateTime(n) {

    const startingTime = getCurrentTime()

    let sum = 0;
    for(let i=0; i<=n;i++){
        sum += i
    }

    const endingTime = getCurrentTime()

    return (endingTime - startingTime);
}

const timeDiff = calculateTime(10000);
console.log(timeDiff);