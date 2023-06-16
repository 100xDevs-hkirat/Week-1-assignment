/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000    
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let ans = 0
    let s = new Date().toString().split(" ")[4].split(":")
    for (let i = 1; i <= n; i++) 
        ans += i;
    let e = new Date().toString().split(" ")[4].split(":")
    ans = 360*(e[0]-s[0])+60*(e[1]-s[1])+(e[2]-s[2])
    return ans
}
console.log(calculateTime(10000000000));