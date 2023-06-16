/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 1 resolved successfully')
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 2 resolved successfully')
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 3 resolved successfully')
        }, 3000)
    })
}

function calculateTime() {

    const start = Date.now();

    waitOneSecond()
        .then((res) => {
            console.log(res);
            return waitTwoSecond();
        })
        .then((res) => {
            console.log(res);
            return waitThreeSecond();
        })
        .then((res) => {
            console.log(res);
            const end = Date.now();
            console.log('Time taken ', (end - start) / 1000);
        })
        .catch((err) => {
            console.log(err);
        })
}

calculateTime();