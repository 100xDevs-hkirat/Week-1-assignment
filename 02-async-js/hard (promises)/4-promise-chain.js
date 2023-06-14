/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const { calculateTime } = require('./3-promise-all.js');

calculateTime()

function waitOneSecond() {
 return new Promise(function(resolve){
     setTimeout(()=>{
         console.log("After 1 second")
         resolve()
     },1000)
 })
}

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(()=>{
            console.log("After 2 seconds")
            resolve()
        },2000)
    })
}

function waitThreeSecond() {
    return new Promise(function(resolve){
        setTimeout(()=>{
            console.log("After 3 seconds")
            resolve()
        },3000)
    })
}

//  Call 3 functions 
// function call(){
//     waitOneSecond()
//     waitTwoSecond()
//     waitThreeSecond()
// }

//Calculate the timings
async function calculateTime1(){
    const startTime = new Date().getTime()
    await waitOneSecond()
    await waitTwoSecond()
    await waitThreeSecond()
    const endTime = new Date().getTime()
    const elapsedTime = (endTime - startTime)/1000
    console.log(`Total elapsed is ${elapsedTime}`)
}

calculateTime1()

//We compared between both files...

//Remember promise.all is more fast than await because it handles
//operations concurrently and not sequentially.
