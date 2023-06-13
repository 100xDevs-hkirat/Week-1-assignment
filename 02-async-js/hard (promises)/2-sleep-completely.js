/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            const completedTime = Date.now() - startTime;
            if((completedTime/ 1000) >= seconds){
                clearInterval(interval);
                resolve();
            }
        }, 1000);
        const startTime = Date.now();
    });

}

let n = 3
sleep(n)
.then(() => {
    console.log('we halted for ' + n + ' seconds')
})
.catch((error) =>{
    console.log('an error occured');
});