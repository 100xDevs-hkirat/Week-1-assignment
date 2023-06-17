/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function wait(n) {
  return new Promise((resolve) => {
    setTimeout(
      (solve = () => {
        console.log("promise resolved now");
      }),
      n * 1000
    );
  });
}
console.log(wait(5));
console.log("async call is going on");
