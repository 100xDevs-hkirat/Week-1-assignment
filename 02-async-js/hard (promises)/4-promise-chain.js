/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("FIrst promise..."), 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Second promise..."), 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Third promise..."), 3000);
  });
}

function calculateTime() {
  let startTime = Date.now();
  waitOneSecond()
    .then((res) => {
      console.log(res);
      return waitTwoSecond();
    })
    .then((res2) => {
      console.log(res2);
      return waitThreeSecond();
    })
    .then((res3) => console.log(res3, Date.now() - startTime));
}

calculateTime();
