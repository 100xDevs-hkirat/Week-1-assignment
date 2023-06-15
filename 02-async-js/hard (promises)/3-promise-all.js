/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
  const promise1 = new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return promise1;
}

function waitTwoSecond() {
  const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return promise2;
}

function waitThreeSecond() {
  const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return promise3;
}

function calculateTime() {
  const start = Date.now();
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    () => {
      const end = Date.now();
      const timeTaken = (end - start) / 1000;
      console.log(`Time taken is ${timeTaken} seconds`);
    }
  );
}

calculateTime();
