/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const { resolve } = require("mongodb/lib/core/topologies/read_preference");

function wait(n) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolve after ${n} seconds`);
    }, n * 1000);
  });
  myPromise.then((data) => resolve(data)).catch((err) => reject(err));
}

//wait(5);
