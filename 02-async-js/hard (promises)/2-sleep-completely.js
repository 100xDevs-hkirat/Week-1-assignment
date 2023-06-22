/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve('resolved!!');
      }, seconds);
    });
}
  
async function test() {
    console.log("Calling the function");
    const result = await sleep(3000);
     
    console.log(result);
  }
  
  test();