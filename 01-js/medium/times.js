/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let starttime=new Date().getTime();
    let sum=0;
    for(let i=0;i<n;i++)
    {
        sum+=i;
     }
    let endtime=new Date().getTime();
    let timeTaken=endtime-starttime;
    console.log( `${timeTaken} sec`);
}    
let n0=100;
let n1=100000;
let  n2=100000000;
let time= calculateTime(n0);
let time1=calculateTime(n1);
let time2=calculateTime(n2);
