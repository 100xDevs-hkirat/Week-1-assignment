/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const startTime = new Date().getTime();
  while (new Date().getTime() - startTime < seconds*1000) {
    
  }
}

console.log('Start timer');
sleep(5);
console.log('Stop timer);
