/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function resolveAfterNsecs(n) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), n * 1000);
    });
}

function waitOneSecond() {
    return resolveAfterNsecs(1);
}

function waitTwoSecond() {
    return resolveAfterNsecs(2);
}

function waitThreeSecond() {
    return resolveAfterNsecs(3);
}

async function calculateTime() {
    const start = +Date.now();
    let end;

    await waitOneSecond()
        .then(() => waitTwoSecond())
        .then(() => waitThreeSecond())
        .then(() => {
            end = +Date.now();
        });

    console.log((end - start)/1000)
}

calculateTime()
