/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function (resolve, reject) {
        if (typeof n === 'number' || isNaN(n)) {
            reject("Invalid number")
        }
        setTimeout(() => {
            resolve(n);
        }, n * 1000);
    });
}

wait(3).then((seconds) => {
    console.log(`${seconds} seconds passed`);
}).catch((err) => {
    console.log(`Error: ${err}`);
});