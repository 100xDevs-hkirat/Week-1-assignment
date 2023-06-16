/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const promise = new Promise((resolve, reject) => {
    if (resolve) {
      resolve();
    } else {
      console.log("rejected");
    }
  });
  setTimeout(
    () => promise.then(() => console.log("promise resolved")),
    n * 1000
  );
}

wait(5);
