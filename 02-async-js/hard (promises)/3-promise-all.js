/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
  
  const promise1 = waitOneSecond()
  const promise2 = waitTwoSecond()
  const promise3 = waitThreeSecond()

  Promise.all([promise1, promise2, promise3])
    .then(() => {
      const end = new Date();
      const elapsedTime = (end - start) / 1000;
      console.log(`Promises resolved in ${elapsedTime} seconds.`);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}
