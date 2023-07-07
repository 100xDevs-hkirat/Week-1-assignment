let counterBySecond = 0;

function increment() {
  counterBySecond += 1;
  setTimeout(increment, 1000);
}

increment();

let counterBySecond2 = 0;
function increment2() {
  counterBySecond2 += 1;
}

setTimeout(function () {
  increment2();
}, 1000);

// todo: use Y combinator to find the recursive application
