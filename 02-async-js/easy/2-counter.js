let counter = 1;
function countTimer() {
  console.clear();
  console.log(counter);
  counter += 1;
  setTimeout(countTimer, 1000);
}
countTimer();
