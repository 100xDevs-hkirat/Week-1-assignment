/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function wait (seconds) {
    return new Promise((resolve)=>{
        setTimeout(resolve, 1000*seconds);
    },seconds*1000)
}

