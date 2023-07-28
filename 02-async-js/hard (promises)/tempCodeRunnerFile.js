/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(resolve, 1*1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2 * 1000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve) => {
      setTimeout(resolve, 3 * 1000);
    });
}

async function calculateTime() {
    console.log("start promise.all() \n");
    
    const startTime = Date.now();
    const [promise1, promise2, promise3] = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()];
    await Promise.all([promise1, promise2, promise3]).then(()=>{
        console.log("all promises resolved!");
    })
    const endTime = Date.now();
    console.log("in seconds-> " + (endTime-startTime));


    console.log("\n end promises");
}

calculateTime();