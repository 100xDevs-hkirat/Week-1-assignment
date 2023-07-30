/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const promiseBody = (resolve, n) => {
    setTimeout(resolve, n * 1000);
}

const callback = () => {
    console.log("5 seconds Passed")
}

function wait(n) {
    return new Promise((resolve) => promiseBody(resolve, n));
}

const body = wait(5);
body.then(callback)