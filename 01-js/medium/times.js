/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    var starttime =  Date.now();
    var result = sum(n);

    var endtime =  Date.now();
    var totaltime = endtime - starttime;
    
    
    return totaltime / 1000;   // to calculate in seconds 

   

}
function sum(n){
    var sum = 0;
    for ( var i = 0; i <=n ; i++){
        sum = sum + i;
    }
     return sum ;

}

   var ans = calculateTime(1000);
   console.log(" the total time taken is:" , ans , "second");