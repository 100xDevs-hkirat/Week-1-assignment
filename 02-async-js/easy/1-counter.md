## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

let counter=0;
function incrementcounter(){
    counter++;
    console.log(counter);
}

setInterval(incrementcounter,1000);

//The setInterval function is used to call the incrementCounter function repeatedly every 1000 milliseconds (1 second). 
