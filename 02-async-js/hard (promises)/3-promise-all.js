/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */
function promiseBody1(resolve) {
  setTimeout(resolve, 1000);
}
function promiseBody2(resolve) {
  setTimeout(resolve, 2000);
}
function promiseBody3(resolve) {
  setTimeout(resolve, 3000);
}
// function promiseBody1(resolve){
//     setTimeout(resolve,1000);
// }
let promise1 = new Promise(promiseBody1);
let promise2 = new Promise(promiseBody2);
let promise3 = new Promise(promiseBody3);

function waitOneSecond() {
  return promise1;
}

function waitTwoSecond() {
  return promise2;
}

function waitThreeSecond() {
  return promise3;
}

function calculateTime() {
  let start = Date.now();
  let promiseAll = Promise.all([promise1, promise2, promise3]);

  promiseAll.then(() => {
    let end = Date.now();
    console.log(`Promise All Time: ${(end - start) / 1000}`);
  });
}
waitOneSecond().then(() => console.log("Finished 1"));
waitTwoSecond().then(() => console.log("Finished 2"));
waitThreeSecond().then(() => console.log("Finished 3"));
calculateTime();
