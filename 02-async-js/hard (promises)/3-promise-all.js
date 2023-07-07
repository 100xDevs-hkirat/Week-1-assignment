/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

function calculateTime() {
  const start = Date.now();
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    () => {
      console.log(`it took ${Date.now() - start} milliseconds`);
    }
  );
}
