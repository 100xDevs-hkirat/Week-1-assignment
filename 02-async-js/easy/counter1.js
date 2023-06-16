//counter 1 problem    ->We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
//It should go up as time goes by in intervals of 1 second

let count = 0;

setInterval(function counter(count) {
  console.log(count++);
}, 1000);

let val = 0;
function counter() {
  console.log(val++);
}

function increment() {
  setTimeout(function () {
    counter();
    increment();
  }, 1000);
}

increment();
