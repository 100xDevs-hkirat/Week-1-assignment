/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("resolved promise"), n * 1000);
    })

    return promise;
}

const output = wait(4);
output.then((value) => {
    console.log(value);
})