/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((res, rej) => setTimeout(res, n * 1000));
}

wait(3).then(() => console.log("Hello!"));
