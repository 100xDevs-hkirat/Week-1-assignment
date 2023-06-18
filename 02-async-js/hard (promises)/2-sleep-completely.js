/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
    
    Expected Functionality : console.log('Hello'); sleep(1); console.log('Hello Again')
    There should be a gap of 1 second between Hello and Hello Again

========================

CONCLUSION

There is no better method than this for the exact purpose that is mentioned
in the question. It is clear it cannot be done in any way using promises 
or callbacks, as they won't stop program execution as they are async by nature.

Thus this question has nothing to do with promises

*/

function sleep (seconds) {
    const start = Date.now();
    while(Date.now() - start < (seconds * 1000)) {
        // wait
    }
}

console.log('hello');

sleep(1);

console.log('hello');