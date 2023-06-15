/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

async function sleep (seconds) {
    console.log("start");
    await new Promise(res => {
        setTimeout(() => { res() }, seconds * 1000);
    });
    console.log("end");
}