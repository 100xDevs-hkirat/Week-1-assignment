/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved in 1");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved in 2");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved in 3");
    }, 3000);
  });
}

function waitForAll() {
  const startTime = Date.now();
  waitOneSecond().then(() =>
    waitTwoSecond().then(() =>
      waitThreeSecond().then(() => {
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000;
        console.log(`Time elapsed : ${elapsedTime}`);
      })
    )
  );
}

waitForAll();
