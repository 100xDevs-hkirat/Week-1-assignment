/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

console.log('next console takes time')

function sleep (seconds) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve();
     }, seconds * 1000)
  })
}

sleep(10)

console.log('It is the second console')