let n = 0;
function counter() {
  n = n + 1;
  console.clear();
  console.log(n);
}

setInterval(counter, 1000);
