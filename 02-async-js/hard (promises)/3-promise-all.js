/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
    const promises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()];

    const start = +Date.now();
    let end;

    await Promise.all(promises).then(() => (end = +Date.now()));

    console.log((end - start) / 1000);
}

calculateTime();
