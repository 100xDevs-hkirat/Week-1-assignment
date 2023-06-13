/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function waitOneSecond() {
  const answer = new Promise((resolve, reject) => {
    setTimeout(() => resolve("1"), 1000);
  });
  return answer;
}

function waitTwoSecond() {
  const answer = new Promise((resolve, reject) => {
    setTimeout(() => resolve("2"), 2000);
  });
  return answer;
}

function waitThreeSecond() {
  const answer = new Promise((resolve, reject) => {
    setTimeout(() => resolve("3"), 3000);
  });
  return answer;
}

function calculateTime() {
  const startTime = new Date().getTime();
  waitOneSecond().then((value) => {
    console.log(value);
    waitTwoSecond().then((value) => {
      console.log(value);
      waitThreeSecond().then((value) => {
        console.log(value);
        const endTime = new Date().getTime();
        console.log(Math.abs(endTime - startTime) / 1000);
      });
    });
  });
}

calculateTime();
