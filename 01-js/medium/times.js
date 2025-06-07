/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

exports.calculateTime = (n) => {
  const start = new Date();

  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(`Sum of 1-${n} numbers is: ${sum}`);
  const end = new Date();
  console.log(
    `Start time: ${start.getDate()} ${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}.${start.getMilliseconds()}`
  );
  console.log(
    `End time: ${end.getDate()} ${end.getHours()}:${end.getMinutes()}:${end.getSeconds()}.${end.getMilliseconds()}`
  );
  return end - start;
};
