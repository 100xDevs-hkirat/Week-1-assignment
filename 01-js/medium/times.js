/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function sum100(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=i
    }
}

function sum100000(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=i
    }
}
function sum1000000000(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=i
    }
}

function calculateTime() {
   const measureTime = function(func,params){
       const startTime = new Date().getTime();
       func(params)
       const endTime = new Date().getTime();
       const totalTime = (endTime - startTime)/1000
       console.log(`Function execution time is ${totalTime} seconds`)
   }
   measureTime(sum100,100)
   measureTime(sum100000,100000)
   measureTime(sum1000000000,1000000000)
}
calculateTime()
