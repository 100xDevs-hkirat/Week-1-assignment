/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, n * 1000);
    })
}

wait(3) // Wait for 3 seconds
  .then(() => {
    console.log('Promise resolved after 3 seconds');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
