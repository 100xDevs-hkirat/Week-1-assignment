/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function wait(n) {

    return new Promise((resolve) => {

        if (n < 0) {

          reject(new Error('Delay time cannot be negative'));

        } else {

          setTimeout(() => {

            resolve(`Resolved after ${n} seconds`);

          }, n * 1000);

        }

      });

}

 

console.log("this is a logging statement")

 

  // Example usage:

  wait(3)

    .then((result) => {

      console.log(result); // Resolved after 3 seconds

    })

    .catch((error) => {

      console.error(error.message);

    });