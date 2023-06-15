/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const calculateTime1 = require('./3-promise-all');

function waitOneSecond() {
  const promise1 = new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return promise1;
}

function waitTwoSecond() {
  const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return promise2;
}

function waitThreeSecond() {
  const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return promise3;
}

function calculateTime() {
  const start = Date.now();
  calculateTime1();

  waitOneSecond()
  .then(() => {
    return waitTwoSecond();
  })
  .then(() => {
    return waitThreeSecond();
  })
  .then(() => {
    const end = Date.now();
    const timeTaken = (end - start) / 1000;

    console.log(`Time taken is ${timeTaken} seconds when done sequentially`);
  })
}

calculateTime();
