/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

// this function will allow other async function to run while it is sleeping
export function sleep (seconds) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("\n sleep completed \n");
        }, seconds * 1000);
    })
}

// this is harmful function, it will stop entire thread until n secs
export function harmfulSleep(seconds)
{
    const startTime = Date.now();
    while(Date.now() - startTime <= seconds * 1000)
    {
        // compulsory wait for n seconds
    }
}