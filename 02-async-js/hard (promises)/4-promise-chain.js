/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("task-1 completed");
        },1000);
    });
}

function waitTwoSecond(prevTime) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("task-2 completed");
        },2000);
    });
}

function waitThreeSecond(prevTime) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("task-3 completed");
        },3000);
    });
}

function calculateTime() {
    let startTime = Date.now();
    waitOneSecond().
    then(result => {
        console.log(result);
        return waitTwoSecond();
    })
    .then(result => {
        console.log(result);
        return waitThreeSecond();
    })
    .then(result => {
        console.log(result);
        let endTime = Date.now();
        let elapsedTime = Math.floor((endTime - startTime)/1000);
        console.log(`Total elapsed time : ${elapsedTime}`);
    })
}

calculateTime();