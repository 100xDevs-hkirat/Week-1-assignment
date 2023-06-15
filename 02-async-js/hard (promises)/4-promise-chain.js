/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Promise 1 resolve in 1 second");
        },1*1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Promise 2 resolve in 2 second");
        },2*1000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Promise 3 resolve in 3 second");
        },3*1000)
    })
}

function calculateTime() {
    const startTime = performance.now();
    waitOneSecond().then(()=>{
        return waitTwoSecond();
    }).then(()=>{
        return waitThreeSecond();
    }).then(()=>{
        const endTime = performance.now();
        const duration = (endTime - startTime)/1000 ;
        console.log(` ${duration} seconds required to resolve all the three promises`);
        console.log(`the difference between 3-promise-all.js and 4-promise-chain.js is : ${duration-3.0147945997714998} sec`)
    })
}

calculateTime();