/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
var n = 1000000000;
var totaltime = 0;
function calculateTime(x,y) {
    
    var startingtime = parseFloat(new Date().getTime());
    let sum = 0;
    for(let i=x;i<=y;i++)sum += i;
    var endtime = parseFloat(new Date().getTime());
    console.log('time for calculating sum from ' + x + ' to '  + y + ' is ' + (endtime-startingtime)/1000);
    totaltime = Math.max(totaltime,(endtime - startingtime) / 1000);
}
setTimeout(function () {
    calculateTime(1,100000);
}, 0);
setTimeout(function () {
    calculateTime(10000001, 100000000);
}, 0);
setTimeout(function (){
    calculateTime(1000001,10000000);
} ,0);
setTimeout(function (){
    calculateTime(10000001, 100000000);
}, 0);
setTimeout(function (){
    calculateTime(100000001,1000000000);
}, 0);
calculateTime(1,1000000000);

