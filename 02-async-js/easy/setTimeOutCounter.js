let counter = 0;

function printCounter() {
  console.log(counter++);
  setTimeout(counter, 1000);
}
printCounter();
