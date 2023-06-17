/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((res, rej) =>
    setTimeout(() => res(`Resolved First , ${new Date().toTimeString()}`), 1000)
  );
}

function waitTwoSecond() {
  return new Promise((res, rej) =>
    setTimeout(
      () => res(`Resolved Second , ${new Date().toTimeString()}`),
      2000
    )
  );
}

function waitThreeSecond() {
  return new Promise((res, rej) =>
    setTimeout(() => res(`Resolved Third , ${new Date().toTimeString()}`), 3000)
  );
}

async function calculateTime() {
  const startTime = new Date();

  await waitOneSecond();
  await waitTwoSecond();
  await waitThreeSecond();

  const endTime = new Date();

  // time in second
  return (endTime - startTime) / 1000;
}

// Promise.all() takes the highest time of all the promises
(async () => {
  console.log(await calculateTime());
})();
