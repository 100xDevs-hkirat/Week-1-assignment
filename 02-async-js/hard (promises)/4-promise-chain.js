/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("promise resolve after 1 seconds");
      resolve();
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("promise resolve after 2 seconds");
      resolve();
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("promise resolve after 3 seconds");
      resolve();
    }, 3000);
  });
}

function calculateTime() {
  let startTime = new Date();
  waitOneSecond().then(() => {
    waitTwoSecond().then(() => {
      waitThreeSecond().then(() => {
        let endTime = new Date();
        console.log(
          "Total seconds taken to resolve all promises are :" +
            (endTime - startTime) / 1000
        );
      });
    });
  });
}

calculateTime();
