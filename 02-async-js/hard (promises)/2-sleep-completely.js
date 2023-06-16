/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

async function sleep (seconds) {
    const now = new Date().getTime()
    const later = now + (seconds*1000)
    while(new Date().getTime() < later){
        //
    }
}

sleep(3)

console.log("Did something else")