/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const answer = new Promise(function (resolve, reject) {
    setTimeout(resolve, n * 1000);
  });

  return answer;
}

wait(10).then(function () {
  console.log("I've waited for a long time");
});
