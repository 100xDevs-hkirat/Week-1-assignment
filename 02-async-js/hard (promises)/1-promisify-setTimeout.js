/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const getResolved = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
  return getResolved;
}
console.log("Before wait");

wait(3).then(() => {
  console.log("After 3 seconds");
});

console.log("After wait");
