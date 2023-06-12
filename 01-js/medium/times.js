/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

// using Date calss //less precise
function calculateTime(n) {
  const start = Date.now();

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  const totalTime = Date.now() - start;
  return totalTime;
}

// using console.time
function calculateTime(n) {
    console.time("timeForSum");

    let sum = 0;
    for(let i = 1; i<=n; i++) {
        sum += i;
    }

    return console.timeEnd("timeForSum");
}

// using performance.now -- more precise
function calculateTime(n) {
  const startTime = performance.now();

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  const totalTime = performance.now() - startTime;

  console.log(totalTime);
  return totalTime;
}


calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);
