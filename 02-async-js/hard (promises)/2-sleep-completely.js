/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

const { getTime } = require('../medium/clock');


function sleep(seconds) {
    const start = +Date.now();
    const end = start + seconds * 1000;

    while (+Date.now() < end) {
        // I'm sleeping, don't disturb.
    }
}

console.log('start sleeping', getTime());

sleep(10);

console.log('done sleeping', getTime());
