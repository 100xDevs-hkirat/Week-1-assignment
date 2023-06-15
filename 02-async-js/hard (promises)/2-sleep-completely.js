/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    let startTime = new Date().getTime();
    let milliseconds = seconds * 1000;
    while (new Date().getTime() - startTime < milliseconds) {
        // console.log("Main thread is blocked");
    }
    console.log("Main thread is released");
}

sleep(3);