/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000);
    })
}

function calculateTime() {
    const startTime = Date.now();
    const promise1 = waitOneSecond();
    const promise2 = waitTwoSecond();
    const promise3 = waitThreeSecond();

    return Promise.all([promise1, promise2, promise3]).then(results => {
        const endTime = Date.now();
        const executionTime = endTime - startTime;
        console.log("All promises resolved: ", results);
        console.log("Total time taken: ", executionTime);
    })
}

calculateTime();