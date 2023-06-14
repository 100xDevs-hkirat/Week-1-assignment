/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function delay(seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
}

function waitOneSecond() {
  return delay(1)
}

function waitTwoSecond() {
  return delay(2)
}

function waitThreeSecond() {
  return delay(3)
}


function calculateTime() {
  const start = new Date();
  waitOneSecond()
    .then(() => waitTwoSecond()
    .then(() => waitThreeSecond()
    .then(() => {
      const end = new Date();
      const elapsedTime = (end - start) / 1000;
      console.log(`Sequentially called promises completed in ${elapsedTime} seconds.`);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}
