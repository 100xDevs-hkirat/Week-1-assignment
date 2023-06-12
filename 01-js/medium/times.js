/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  let stTime = new Date().getTime(); // returns the milliseconds
  let tot = 0;
  for (let i = 1; i <= n; i++) {
    tot += i;
  }
  return (new Date().getTime() - stTime) / 1000; // returning it in seconds
}

console.log(calculateTime(100));
console.log(calculateTime(100000));
console.log(calculateTime(1000000000));
