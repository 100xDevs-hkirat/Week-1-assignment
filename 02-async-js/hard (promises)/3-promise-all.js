/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function delayOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 1 second");
    }, 1000);
  });
}

function delayTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000);
  });
}

function delayThreeSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 3 seconds");
    }, 3000);
  });
}

function waitForAllPromises() {
  const startTime = Date.now();
  const promises = [delayOneSecond(), delayTwoSeconds(), delayThreeSeconds()];

  Promise.all(promises)
    .then((results) => {
      const endTime = Date.now();
      console.log(`All promises resolved in ${(endTime - startTime) / 1000}s`);
      console.log(results);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
}

function calculateTime() {}

delayOneSecond().then(() => {
  console.log("Hello1");
});

delayThreeSeconds().then(() => {
  console.log("Hello3");
});

delayTwoSeconds().then(() => {
  console.log("Hello2");
});

waitForAllPromises();
