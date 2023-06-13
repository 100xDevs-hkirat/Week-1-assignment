/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const t1=new Date().getTime()
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i
    }
    const t2=new Date().getTime()
    console.log("t1 is ",t1,"t2 is ",t2)
    return (t2-t1)/1000
}
// console.log(calculateTime(100)) -- 0.001sec
// console.log(calculateTime(100000))  -- 0.005sec
// console.log(calculateTime(1000000000)) -- 1.276 sec