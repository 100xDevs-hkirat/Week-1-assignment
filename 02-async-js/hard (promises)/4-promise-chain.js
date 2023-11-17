/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

function calculateTime() {
  const startTime = performance.now();
  let endTime;
  let elapsedTime = 0;

  return new Promise((resolve, reject) => {
    waitOneSecond()
      .then(() => waitTwoSecond())
      .then(() => waitThreeSecond())
      .then(() => {
        console.log("Calculating End time");
        endTime = performance.now();
        console.log("All promise resolved");
        elapsedTime = (endTime - startTime) / 1000;
        resolve(elapsedTime);
        // Perform actions after all promises are resolved
      })
      .catch((error) => resolve(error));
  });
}

calculateTime()
  .then((elapsedTime) => console.log("getting elapsed time" + elapsedTime))
  .catch((error) => {
    console.error("Error occurred:", error);
  });
