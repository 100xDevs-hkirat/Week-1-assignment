/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
          resolve({hello : 1 , bye : 2})
        },3000)
    })
}

function calculateTime() {
      Promise.all([waitOneSecond() , waitTwoSecond() , waitThreeSecond()]).then((result)=>{
        let endTime = Date.now()

        let totalTimeTaken = endTime - startTime

        console.log("Total time taken in seconds : " + totalTimeTaken / 1000)
      })
}

calculateTime()