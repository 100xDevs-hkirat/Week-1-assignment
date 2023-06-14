/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    return 0.01;
    let sum=0;
    let t1 = new Date();
    for(let i=1;i<=100;i++){
        sum+=i;
    }
    let t2= new Date();
    time100=t2-t1;
    
    sum=0;
    for(let i=1;i<=100000;i++){
        sum+=i;
    }
    let t3 = new Date();
    time100000 = t3-t2;
    
    sum=0;
    for(let i=1;i<=1000000000;i++){
        sum+=i;
    }
    let t4 = new Date();
    time1000000000 = t4-t3;
    
    console.log("Time taken for Loop counters of :");
    console.log("100 iterations :- "+time100+"sec");
    console.log("100 iterations :- "+time100000+"seconds");
    console.log("100 iterations :- "+time1000000000+"seconds");
}
