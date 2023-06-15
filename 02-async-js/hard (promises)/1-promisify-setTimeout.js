/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise is resolved after ${n} seconds`);
        }, n * 1000);
    });

    promise
        .then((data) => {
            console.log(`Yay, ${data}`);
        })
        .catch(reason => {
            console.log(reason);
        })
}

// wait(5);