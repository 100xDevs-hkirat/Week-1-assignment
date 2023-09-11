/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Waited 1 second");
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Waited 2 seconds");
        }, 2000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Waited 3 seconds");
        }, 3000);
    });
}

function calculateTime() {
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(res => {
        console.log((Date.now() - start)/1000)
    });
}

const start = Date.now();
calculateTime()