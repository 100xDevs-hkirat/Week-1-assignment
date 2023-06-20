let count = 0;
function startCounter() {
  count += 1;
  console.clear();
  console.log(count);
}

setInterval(startCounter, 1000);
