/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {

    var date1 = Date.now()//new Date().getTime();
    //console.log(date1)
    var sum =0;
    for (var i=0;i<n;i++){
        sum +=i;
    }
    var date2 = Date.now()//new Date().getTime();
    var difference = date2 - date1//date1.getTime() - date2.getTime();
    //console.log(difference)
    return difference;
}

console.log(calculateTime(100) )
console.log(calculateTime(100000) )
console.log(calculateTime(1000000000) )