/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  let currentTime = Date.now();
  while ((Date.now() - currentTime) / 1000 < seconds) {}
}

sleep(2);
console.log("sleeped succesfully");
