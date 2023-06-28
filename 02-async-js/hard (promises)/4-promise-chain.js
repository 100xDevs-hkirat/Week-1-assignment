/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

let startTime = Date.now();

function waitOneSecond() {
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
          resolve("promise-1")
        },1000)
    })
 }
 
 function waitTwoSecond() {
     return new Promise((resolve , reject)=>{
         setTimeout(()=>{
           resolve("promise-2")
         },2000)
     })
 }
 
 function waitThreeSecond() {
     return new Promise((resolve , reject)=>{
         setTimeout(()=>{
           resolve("promise-3")
         },3000)
     })
 }
 
 function calculateTime() {
      waitOneSecond().then((result)=>{
        let promise1Time = Date.now()
        let promise1diff = promise1Time-startTime
        console.log(result , ' takes ' , promise1diff , 'milliseconds')
        return waitTwoSecond()
      })
      .then((result)=>{
        let promise2Time = Date.now()
        let promise2diff = promise2Time-startTime
        console.log(result , ' takes ' , promise2diff , 'milliseconds')
        return waitThreeSecond()
      })
      .then((result)=>{
        let promise3Time = Date.now()
        let promise3diff = promise3Time-startTime
        console.log(result , ' takes ' , promise3diff , 'milliseconds')
      })
 }
 
 calculateTime()