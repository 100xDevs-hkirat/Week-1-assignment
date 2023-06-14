/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function promiseBody1(resolve) {
  setTimeout(resolve, 1000);
}
function promiseBody2(resolve) {
  setTimeout(resolve, 2000);
}
function promiseBody3(resolve) {
  setTimeout(resolve, 3000);
}

function waitOneSecond() {
  return new Promise(promiseBody1);
}

function waitTwoSecond() {
  return new Promise(promiseBody2);
}

function waitThreeSecond() {
  return new Promise(promiseBody3);
}

function calculateTime() {
  let start = Date.now();
  waitOneSecond().then(() => {
    console.log("finished 1");
    waitTwoSecond().then(() => {
      console.log("finished 2");
      waitThreeSecond().then(() => {
        console.log("finished 3");
        let end = Date.now();
        console.log(`time: ${end - start}`);
      });
    });
  });
}
calculateTime();
