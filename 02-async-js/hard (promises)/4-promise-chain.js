/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const resolveAfterGivenSeconds = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000 * n);
  });
};
function waitOneSecond() {
  return resolveAfterGivenSeconds(1);
}

function waitTwoSecond() {
  return resolveAfterGivenSeconds(2);
}

function waitThreeSecond() {
  return resolveAfterGivenSeconds(3);
}

async function calculateTime() {
  const start = Date.now();
  const arr = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()];
  while (arr.length !== 0) {
    await arr.shift();
  }
  console.log(
    `time consumed in running the promie in a sequence is ${Date.now() - start}`
  );

  return "all promises resolved";
}
