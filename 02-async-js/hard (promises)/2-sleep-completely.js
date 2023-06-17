/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  console.log("Before");
  busyWait(seconds);
  console.log("After");
}

function busyWait(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}

sleep(2000);
