/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const milliseconds = n * 1000;
  const promiseToResolve = new Promise((resolve, reject) => {
    setTimeout(() => resolve("resolved the promise"), milliseconds);
  });

  return promiseToResolve;
}
