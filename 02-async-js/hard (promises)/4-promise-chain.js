/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve, reject) => {
        const start = Date.now();
        setTimeout(() => resolve(start), 1000);
    })
}

function waitTwoSecond(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(time), 2000);
    })
}

function waitThreeSecond(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(time), 3000);
    })
}

function calculateTime() {
    waitOneSecond()
    .then((time) => waitTwoSecond(time))
    .then((time) => waitThreeSecond(time))
    .then((time) => {
        console.log(Date.now() - time);
    })
}

calculateTime();