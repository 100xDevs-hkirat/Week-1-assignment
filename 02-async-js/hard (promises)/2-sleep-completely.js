/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

async function sleep(seconds) {
  let startTime = new Date().getTime();

  while (new Date().getTime() - startTime <= seconds * 1000);
}

sleep(10);

for (let i = 0; i < 1000; i++) {
  console.log(i);
}
