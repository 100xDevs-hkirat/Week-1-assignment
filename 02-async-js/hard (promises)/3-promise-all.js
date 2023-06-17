/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
return new Promise((resolve)=>{
    setTimeout(resolve,1000);
})
}

function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(resolve,2000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve)=>{
        setTimeout(resolve,3000);
    })
}

function calculateTime() {
    let startTime=Date.now();
let f1=waitOneSecond();
let f2=waitTwoSecond();
let f3=waitThreeSecond();
Promise.all([f1,f2,f3]).then(()=>{
    console.log("All done")
    console.log("it took "+ (Date.now()-startTime) +" milliseconds");
    // `It took ${Date.now()-startTime}`
});
}
calculateTime();