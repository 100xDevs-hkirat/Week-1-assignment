/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */



// Function to return a promise that resolves after 1 second

function waitOneSecond() {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve('Resolved after 1 second');

      }, 1000);

    });

  }

 

  // Function to return a promise that resolves after 2 seconds

  function waitTwoSeconds() {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve('Resolved after 2 seconds');

      }, 2000);

    });

  }

 

  // Function to return a promise that resolves after 3 seconds

  function waitThreeSeconds() {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve('Resolved after 3 seconds');

      }, 3000);

    });

  }

 

  // Function to use Promise.all to wait for all 3 promises to resolve and print the time it took

  function calculateTime() {

    const startTime = Date.now();

 

    // Create an array of promises

    const promises = [

      waitOneSecond(),

      waitTwoSeconds(),

      waitThreeSeconds(),

    ];

 

    // Use Promise.all to wait for all promises to resolve

    Promise.all(promises)

      .then((results) => {

        const endTime = Date.now();

        const elapsedSeconds = (endTime - startTime) / 1000;

        console.log(`All promises resolved in ${elapsedSeconds} seconds`);

        results.forEach((result) => {

          console.log(result);

        });

      })

      .catch((error) => {

        console.error('An error occurred:', error);

      });

  }

 

  // Call the calculateTime function to wait for all promises to resolve

  calculateTime();