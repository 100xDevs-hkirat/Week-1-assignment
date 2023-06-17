/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("promise resolve after 1 second");
      resolve();
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("promise resolve after 2 second");
      resolve();
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("promise resolve after 3 second");
      resolve();
    }, 3000);
  });
}

function calculateTime() {
  let startTime = new Date();
  return Promise.all([
    waitOneSecond(),
    waitTwoSecond(),
    waitThreeSecond(),
  ]).then(() => {
    let endTime = new Date();
    console.log(
      "Total time taken to resolve all three promise is : " +
        (endTime - startTime) / 1000 +
        " seconds"
    );
  });
}

calculateTime();
