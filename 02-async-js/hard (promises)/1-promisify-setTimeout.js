/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let promise = new Promise((resolve) => {
    setTimeout(resolve, n);
  });
  return promise;
}

wait(1000).then(() => {
  console.log("done");
});
