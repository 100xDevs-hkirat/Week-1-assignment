/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve) => setTimeout(resolve, 1000, true));
}

function waitTwoSecond() {
  return new Promise((resolve) => setTimeout(resolve, 2000, true));
}

function waitThreeSecond() {
  return new Promise((resolve) => setTimeout(resolve, 3000, true));
}

function calculateTime() {
  const promises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()];
  const startTime = performance.now();
  return Promise.all(promises)
    .then(() => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      console.log(`Time taken: ${timeTaken}`);
    })
    .catch((err) => console.error(err));
}
