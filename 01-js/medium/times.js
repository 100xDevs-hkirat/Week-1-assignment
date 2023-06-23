/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const startTime = new Date(); // Get the current time before the calculation
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    const endTime = new Date(); // Get the current time after the calculation
  
    const timeDiff = endTime - startTime; // Calculate the difference in milliseconds
    const timeInSeconds = timeDiff / 1000; // Convert milliseconds to seconds
  
    return timeInSeconds;
}

//https://www.educative.io/answers/how-to-find-the-time-taken-to-execute-a-function-in-javascript