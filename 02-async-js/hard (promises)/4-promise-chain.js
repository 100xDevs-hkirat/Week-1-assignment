/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve)=>setTimeout(()=>{resolve('resolving after 1 sec')},1000));
  
}

function waitTwoSecond() {
    return new Promise((resolve)=>setTimeout(()=>{resolve('resolving after 2 sec')},2000));
}


function waitThreeSecond() {
    return new Promise((resolve)=>setTimeout(()=>{resolve('resolving after 3 sec')},3000));

}

function calculateTime() {
const startTime = Date.now();
waitOneSecond().then(()=>{waitTwoSecond().then(()=>{waitThreeSecond().then(()=>{
    const endTime = Date.now();
    const totalTime = endTime-startTime;
    console.log(`All promises resolved in ${totalTime}`)
})})})
}

calculateTime()

/* chaining of promisies took more time than when call all togther in 3-promise-all.js */