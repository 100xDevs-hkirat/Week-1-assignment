/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
function calculateSumTime(n) {
    // Record the start time
    const startTime = new Date().getTime();
  
    // Your code to calculate the sum from 1 to n goes here
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    // Record the end time
    const endTime = new Date().getTime();
  
    // Calculate the time difference in seconds
    const timeInSeconds = (endTime - startTime) / 1000; 
  
    // Log the result
    console.log(`Sum from 1 to ${n}: ${sum}`);
    console.log(`Time taken: ${timeInSeconds} seconds`);
  }
  
  // Test cases
  calculateSumTime(100);
  calculateSumTime(100000);
  calculateSumTime(1000000000);
  