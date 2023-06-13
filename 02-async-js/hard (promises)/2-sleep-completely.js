/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const answer = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Waited for ${seconds} seconds`), seconds * 1000);
  });

  return answer;
}

sleep(5).then((value) => {
  console.log(value);
  console.log("Executed after waiting");
});
