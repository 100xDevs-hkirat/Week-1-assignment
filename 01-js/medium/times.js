/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let begin = Date.now();
    console.log("Start time "+begin);
    
    let summ=0;
    for(let i=0;i<n;i++){
        summ+=i;
    }

    
    let end = Date.now();
    console.log("End time "+end);


    console.log("Diff time "+ (end-begin)+ " seconds");
    return (end-begin);

}