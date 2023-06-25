/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(second) {
  function runme() {
    for (let i = 0; i < 5; i++) {}
    console.log("runme function executed");
  }
  setTimeout(runme, second);
}
console.log("before wait function");
sleep(5000);
console.log("after wait function");
