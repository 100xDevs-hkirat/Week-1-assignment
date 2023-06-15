/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, 1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, 2000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, 3000);
    })
}

function calculateTime() {
    let time1 = new Date().getTime();
    waitOneSecond().then(() =>{
        console.log("Promise 1 completed");
        waitTwoSecond().then(() =>{
            console.log("Promise 2 completed");
            waitThreeSecond().then(()=>{
                console.log("Promise 3 completed");
                let time2 = new Date().getTime();
                console.log("total time taken : " + (time2-time1)/1000);
                console.log("End");
            })
        })
    })
}
console.log("Start");
calculateTime();