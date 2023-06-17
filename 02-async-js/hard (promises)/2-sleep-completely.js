/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  return new Promise((res, rej) => setTimeout(res, seconds * 1000));
}

// sleep(5).then(() => {
//   // execute anything after sleep is over
//   console.log(new Date().toTimeString());
// });

(async () => {
  await sleep(5);

  console.log(new Date().toTimeString());
})();
