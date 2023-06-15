/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved wait one second");
        }, 1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved wait two second");
        }, 2000);
    })

}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved wait three second");
        }, 3000);
    })
}

function calculateTime() {
    const startTime = Date.now();

    waitOneSecond()
        .then(() => waitTwoSecond())
        .then(() => waitThreeSecond())
        .then(() => console.log(Date.now() - startTime));
}

calculateTime();