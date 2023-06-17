/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(milliseconds) {
    const start = new Date().getTime();
    let current;
  
    do {
      current = new Date().getTime();
    } while (current - start < milliseconds);
  }
  console.log('Start');
  busyWait(3000);
  console.log('End');
  