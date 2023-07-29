/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const promiseBody = (resolve, n) => {
    setTimeout(resolve, n * 1000);
}

function waitOneSecond() {
    return new Promise(resolve => promiseBody(resolve, 1));
}

function waitTwoSecond() {
    return new Promise(resolve => promiseBody(resolve, 2));
}

function waitThreeSecond() {
    return new Promise(resolve => promiseBody(resolve, 3));
}

const callback = () => {
    console.log("Called Backed");
}

const calculateTime = async () => {
    const startTime = Date.now();
    await waitOneSecond().then(callback);
    await waitTwoSecond().then(callback);
    await waitTwoSecond().then(callback);
    const endTime = Date.now();
    console.log(`Game ended after ${(endTime - startTime) / 1000}`);
}

calculateTime()