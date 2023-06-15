/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function sumALL(start, end) {
  var sum = 0;
  for (var i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
const startTime = new Date();

console.log(sumALL(1, 100));

const endTime = new Date();

const timeElapsed = (endTime - startTime) / 1000;

console.log("Time in seconds :" + timeElapsed);
