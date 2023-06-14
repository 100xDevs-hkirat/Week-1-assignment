/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(function(resolve){
        setTimeout(()=>resolve("resolved after 1 sec"),1000)
    })
}

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(()=>resolve("resolved after 2 sec"),2000)
    })
}

function waitThreeSecond() {
    return new Promise(function(resolve){
        setTimeout(()=>resolve("resolved after 3 sec"),3000)
    })
}

function calculateTime() {
    let before=new Date();
    let hrs=before.getHours();
    let mins=before.getMinutes();
    let secs=before.getSeconds();
    console.log(`Before resolving ${hrs} : ${mins} :${secs}`);
    waitOneSecond().
    then(res=>{console.log(res);
        return waitTwoSecond();}).
        then(res=>{console.log(res);
        return waitThreeSecond()}). 
        then(res=>{console.log(res);
            fter=new Date();
            hrs=after.getHours();
           mins=after.getMinutes();
           secs=after.getSeconds();
           console.log(`After resolving ${hrs} : ${mins} :${secs}`); })
}