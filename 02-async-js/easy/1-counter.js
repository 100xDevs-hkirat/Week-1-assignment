/* ## Create a counter in JavaScript
It should go up as time goes by in intervals of 1 second */

let counter = 0;
var intervalId = setInterval(function() {
    counter++;
    console.log(counter);
    clear(counter);
    },1000);

function clear(counter){
    if (counter === 10) {
        clearInterval(intervalId);
    }
}








