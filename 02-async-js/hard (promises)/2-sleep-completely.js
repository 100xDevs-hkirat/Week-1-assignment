/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

 

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

  }

 

  console.log("Hello");

  sleep(2000).then(() => { console.log("World!"); });