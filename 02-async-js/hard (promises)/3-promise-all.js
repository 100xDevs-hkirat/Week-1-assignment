/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`task-1 completed`);
        },1000);
    });
}

function waitTwoSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`task-2 completed`);
        },2000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`task-3 completed`);
        },3000);
    });
}

function calculateTime() {
    let startTime = Date.now();
    return Promise.all([waitTwoSecond(),waitOneSecond(),waitThreeSecond()])
    .then(values => {
        console.log(values);
        let endTime = Date.now();
        let elapsedTime = Math.floor((endTime-startTime)/1000);
        console.log(`Total elapsed time for all the functions : ${elapsedTime}`);
    })
}

calculateTime();