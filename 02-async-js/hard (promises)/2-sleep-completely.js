/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(milliseconds) {
    const endTime = new Date().getTime() + milliseconds;
    while (new Date().getTime() < endTime) {
      // Busy wait until the desired end time is reached
    }
    console.log("now the function is free to take up a task");
  }

sleep(4000);