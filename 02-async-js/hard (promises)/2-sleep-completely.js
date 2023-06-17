/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  let previousDate = new Date().getTime();
  let current;
  do {
    current = new Date().getTime();
  } while (current - previousDate < seconds);
}
let seconds = 4000;
console.log("js thread is busy for " + seconds / 1000 + " seconds");
sleep(seconds);
console.log("thread is idle now");
