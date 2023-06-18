/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const startTime = new Date().getSeconds();

    while(new Date().getSeconds() - startTime < seconds){
        console.clear();
        console.log(new Date().getSeconds() - startTime);
    }

}


sleep(4);
console.log('here');