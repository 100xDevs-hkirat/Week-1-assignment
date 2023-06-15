/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("First promise...");
    }, 1000)
  );
}

function waitTwoSecond() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("Second promise...");
    }, 2000)
  );
}

function waitThreeSecond() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("Third promise...");
    }, 3000)
  );
}

function calculateTime() {
  let startTime = Date.now();
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((res) => console.log(Date.now() - startTime, res))
    .catch((err) => console.log(err));
}

calculateTime();
