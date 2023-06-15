/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    const start = Date.now();
    console.log(`Thread is blocked for next ${seconds} seconds`);
    while(Date.now() - start < seconds * 1000) {

    }
    console.log("Continue execution after sleep");
}

sleep(5);


// Below code is by Prashant Varma
// function sleep(seconds) {
//   return new Promise((resolve) => {
//     console.log(`Thread is blocked for next ${seconds} seconds`);
//     setTimeout(() => {
//       resolve();
//     }, seconds * 1000);
//   });
// }

// async function runSleep() {
//   await sleep(5);
//   console.log("Continuing execution after sleep");
// }

// runSleep();

