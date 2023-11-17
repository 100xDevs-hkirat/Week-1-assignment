/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    let counter ={
        name:'aditya',
        goals:'getting desicpline'
    };
    setTimeout(() => {
      let isSuccess = true;
      if (isSuccess) {
        resolve(counter);
      } else {
        reject("rejected after " + n + " seconds");
      }
    }, n * 1000);
  });
}


  wait(5).then((res) => console.log(res))
  .catch((err) => console.log(err));
