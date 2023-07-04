let counter = 1;

function countInterval() {
  console.clear();
  console.log(counter);
  counter += 1;
}

setInterval(countInterval, 1000);
