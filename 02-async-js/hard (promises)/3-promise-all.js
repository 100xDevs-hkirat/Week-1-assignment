/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

const delay = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, n);
    });
}


function waitOneSecond() {
    return delay(1000);
}

function waitTwoSecond() {
    return delay(2000);
}

function waitThreeSecond() {
    return delay(3000);
}

async function calculateTime() {

    const startTime = performance.now();

    await Promise.all([
        waitOneSecond(),
        waitTwoSecond(),
        waitThreeSecond()
    ]);

    const endTime = performance.now();

    return endTime - startTime;
}

module.exports = {
    delay,
    calculateTimeAll: calculateTime
}