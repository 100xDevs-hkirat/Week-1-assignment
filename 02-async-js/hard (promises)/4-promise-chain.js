/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => setTimeout(resolve, 1000, true));
}

function waitTwoSecond() {
  return new Promise((resolve) => setTimeout(resolve, 2000, true));
}

function waitThreeSecond() {
  return new Promise((resolve) => setTimeout(resolve, 3000, true));
}

function calculateTime() {
  const startTime = performance.now();
  return waitOneSecond()
    .then(waitTwoSecond)
    .then(waitThreeSecond)
    .then(() => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      console.log(`Time taken: ${timeTaken}`);
    })
    .catch((err) => console.error(err));
}

calculateTime();
