/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let current = Date.now();

  while (Date.now() - current < n * 1000) {}
}

wait(1);

console.log("wait");
