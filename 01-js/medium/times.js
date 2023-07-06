/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
      let d=new Date();
      let startTime=d.getSeconds();
    //   let startTime=d.getMilliseconds();
      let sum=0;
      for(let i=1;i<=n;i++){
          sum+=i;
        }
        let newDate=new Date();
        let finishTime=newDate.getSeconds();
        // let finishTime=newDate.getMilliseconds();
    return finishTime-startTime;
}

console.log(calculateTime(10000000));