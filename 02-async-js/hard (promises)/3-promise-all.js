/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Message printed after 1 second");
      resolve();
    }, 1000)
  );
}

function waitTwoSecond() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Message printed after 2 seconds from the previous message");
      resolve();
    }, 2000)
  );
}

function waitThreeSecond() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Message printed after 3 seconds from the previous message");
      resolve();
    }, 3000)
  );
}

function calculateTime() {
  const start = new Date();

  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    () => {
      console.log(
        `All promises resolved in ${(new Date() - start) / 1000.0} seconds`
      );
    }
  );
}

calculateTime();
