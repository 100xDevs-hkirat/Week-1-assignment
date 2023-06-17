/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {

let startTime=Date.now();
console.log(startTime);
while(Date.now()-startTime<seconds){
    //do nothing
}
console.log(Date.now()-startTime);
}
sleep(3000);