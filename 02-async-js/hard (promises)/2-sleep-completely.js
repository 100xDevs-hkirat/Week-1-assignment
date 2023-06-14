/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    let startingtime = new Date().getSeconds();
    seconds = parseFloat(seconds/1000);
    let start = new Date().getSeconds();
    while (parseFloat(new Date().getSeconds()) < parseFloat(seconds + startingtime)) {
      
    }
    let end = new Date().getSeconds();
    console.log('thread is released after ' + (end-start)*1000 + ' milisecond');
}

sleep(3000);