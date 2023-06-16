/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    let firstPromise = new Promise((resolve)=>setTimeout(resolve,1000));
    
    return firstPromise;

}

function waitTwoSecond() {
    let secondPromise = new Promise((resolve)=>setTimeout(resolve,2*1000));
    
    return secondPromise;
}

function waitThreeSecond() {

    let thirdPromise = new Promise((resolve)=>setTimeout(resolve,3*1000));
    
    return thirdPromise;

}

function calculateTime() {

    return Promise.all([waitOneSecond,waitTwoSecond,waitThreeSecond])

}

waitOneSecond().then(()=>console.log("one"))
waitTwoSecond().then(()=>console.log("two"))
waitThreeSecond().then(()=>console.log("three"))

calculateTime().then(()=>console.log("total time"))