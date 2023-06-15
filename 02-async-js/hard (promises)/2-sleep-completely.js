/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

// function sleep(seconds) {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => resolve("resolved promise"), seconds * 1000);
//     })

//     return promise;
// }

// async function blockThread(sec) {
//     const output = await sleep(sec);
//     console.log(output);
// }

// blockThread(4);

// console.log('hello');

function sleep(seconds) {
    const startTime = Date.now();
    while (Date.now() - startTime < seconds * 1000) {

    }
}

sleep(12);
console.log('hello');