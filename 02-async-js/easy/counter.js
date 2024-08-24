let counter = 0;

function setCounter() {
  console.clear();
  counter++;
  console.log(counter);
}
setInterval(setCounter, 1000);
