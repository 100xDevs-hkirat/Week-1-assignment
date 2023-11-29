## Create a counter in JavaScript
var counter = 0;
function fn(){
  counter++;
  console.log(counter + " seconds have passed");
}


setInterval(fn, 1000);

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
