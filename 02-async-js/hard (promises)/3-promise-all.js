/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
return new Promise((resolve)=>setTimeout(()=>{resolve('resolving after 1 sec')},1000));
     
}

function waitTwoSecond() {
    return new Promise((resolve)=>setTimeout(()=>{resolve('resolving after 2 sec')},2000));
}

function waitThreeSecond() {
    return new Promise((resolve)=>setTimeout(()=>{resolve('resolving after 3 sec')},3000));
}

function calculateTime() {
    const startTime = Date.now();
  return Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then(
    ()=>{
        const endTime = Date.now();
        const totalTime = endTime-startTime
        console.log(`time taken to resolve 3 promises is ${totalTime}`);
    }
    );
}

calculateTime()