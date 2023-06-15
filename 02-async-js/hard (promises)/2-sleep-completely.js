/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    var startTime = new Date().getTime();
    startTime.getMilliseconds
    return (new Promise((resolve)=>{
        setTimeout(resolve, seconds*1000);
    }));
}

sleep(5).then(()=>{
// Add any code that needs to wait here.
});