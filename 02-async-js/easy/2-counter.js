let count = 0;
function startCounter() {
  console.clear();
  console.log(count);
  count += 1;

  setTimeout(startCounter, 1000);
}

startCounter();