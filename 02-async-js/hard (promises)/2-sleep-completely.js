/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + seconds * 1000) {
    end = new Date().getTime();
  }
}

console.log("starting");
sleep(2);
console.log("done");
