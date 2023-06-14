/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

//Creating a busy-wait sleep function
function sleep (milliseconds) {
  const start = performance.now()
  while(performance.now() - start < milliseconds ){
      //Busy Wait
  }
}

sleep(10000000000000)