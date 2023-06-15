/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const startTime = new Date()

    while (new Date() - startTime < seconds) {
        console.log("Thread blocked")
    }
}

console.log("Before Halt");

sleep(2000);

console.log("After Halt")