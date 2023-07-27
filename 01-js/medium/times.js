/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/



const startTime = new Date().getTime();

function sumnumbers(num1,num2){
    let sum = 0;
    for(let i = num1;i<=num2; i++){
        sum = sum + i;
    }
    console.log(sum);
}

sumnumbers(1,100000000);

const endTime = new Date().getTime();

const averageTime = endTime - startTime;
console.log(averageTime);
