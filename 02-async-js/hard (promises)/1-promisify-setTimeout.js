/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(), 1000 * n);
  });
}
console.log("I will wait for n seconds before printing Goodbye..");
wait(10).then(() => console.log("Goodbye..Printed after 10 seconds"));
