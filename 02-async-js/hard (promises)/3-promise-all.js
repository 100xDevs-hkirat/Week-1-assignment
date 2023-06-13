/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  const answer = new Promise((resolve, reject) => {
    setTimeout(() => resolve("1"), 1000);
  });
  return answer;
}

function waitTwoSecond() {
  const answer = new Promise((resolve, reject) => {
    setTimeout(() => resolve("2"), 2000);
  });
  return answer;
}

function waitThreeSecond() {
  const answer = new Promise((resolve, reject) => {
    setTimeout(() => resolve("3"), 3000);
  });
  return answer;
}

function calculateTime() {
  const startTime = new Date().getTime();
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    (values) => {
      console.log(values);
      const endTime = new Date().getTime();
      console.log(Math.abs(endTime - startTime) / 1000);
    }
  );
}

calculateTime();
