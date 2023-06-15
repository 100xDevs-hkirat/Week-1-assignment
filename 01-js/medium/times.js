/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    //take a timestamp before we start the code
    const startTime = new Date();

    let sum =0;
    for (let i =0 ; i<n;i++){
        sum += i;
    }

    //take the timestamp after the execution of the code
    const endTime = new Date();

    const timeForExecution = endTime - startTime;
    console.log(timeForExecution);
}
calculateTime(99999999);