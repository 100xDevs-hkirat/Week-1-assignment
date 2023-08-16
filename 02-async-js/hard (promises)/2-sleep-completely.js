/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

async function sleep(seconds) {

    console.log('-----Sleep Started---------');

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000 * seconds);
    });

    console.log('---------Sleep Completed----------');
}