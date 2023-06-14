## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

## Code

let counter = 0;

function counterIncrement() {
counter += 1;
console.clear();
console.log(counter)
}
function mySetInterval() {
counterIncrement();
setTimeout(mySetInterval, 1000);
}
setTimeout(mySetInterval, 1000)

(Hint: setTimeout)
