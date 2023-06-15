/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
    Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then(()=>{
        const endTime = performance.now();
    const duration = (endTime - startTime)/1000 ;
    console.log(` ${duration} seconds required to resolve all the three promises`);
    })
    
}

calculateTime();