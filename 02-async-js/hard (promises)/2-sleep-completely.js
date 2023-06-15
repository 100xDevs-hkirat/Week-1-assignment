/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(milliseconds) {
    const start = new Date().getTime();
    while (true) {
      if (new Date().getTime() - start >= milliseconds) {
        break;
      }
    }
  }
  