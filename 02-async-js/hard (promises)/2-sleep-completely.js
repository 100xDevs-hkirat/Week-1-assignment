/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  var e = new Date().getTime() + seconds * 1000;
  while (new Date().getTime() <= e) {}
  console.log("This will print after halt bcoz thread is blocked");
}

sleep(5);

/* Credites to Stack Overflow
 * https://stackoverflow.com/a/16077558
 */
