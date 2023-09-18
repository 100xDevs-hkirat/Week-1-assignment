/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(resolve, n, true);
  });
}

wait(5000).then(() => {
  console.log("5 seconds have passed."); // This will be executed after 5 seconds
});
