## Create a counter in JavaScript
var counter = 0;

function stopwatch() {
  counter = counter + 1;
  console.log(counter);
}

setInterval(stopwatch, 1000);

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
