/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

const promiseBody = (resolve, n) => {
    setTimeout(resolve, n * 1000)
    // return n;
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

const calculateTime = async () => {
    console.log("Starting the Game :)");
    const startTime = Date.now();
    let array = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()];
    await Promise.all(array)
    let endTime = Date.now();
    console.log(`Game ended after ${(endTime - startTime) / 1000}`);
}

const callback = () => {
    console.log("Game Finished :)");
}

calculateTime();