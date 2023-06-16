let counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);
  setTimeout(incrementCounter, 1000);
}

incrementCounter();
