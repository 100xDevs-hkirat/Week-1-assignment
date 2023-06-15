/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  var currentDate = new Date();
  var startSecond = currentDate.getTime();
  let i = 0;
  while (i != n) {
    i++;
  }
  var endSecond = currentDate.getTime();
  return (endSecond - startSecond) / 1000;
}

console.log("Total seconds Taken :" + calculateTime(10000000000));
