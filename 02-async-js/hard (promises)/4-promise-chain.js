/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const { delay, calculateTimeAll } = require('./3-promise-all');

function waitOneSecond() {
    delay(1000);
}

function waitTwoSecond() {
    delay(2000);
}

function waitThreeSecond() {
    delay(3000);
}

async function calculateTime() {

    const startTime = performance.now();

    await waitOneSecond();

    await waitTwoSecond();

    await waitThreeSecond();

    const stopTime = performance.now();

    return stopTime - startTime;
}

async function compareAllvsSeq() {
    const calculateSeq = await calculateTime();

    const calculateAll = await calculateTimeAll();

    return calculateAll > calculateSeq;
}