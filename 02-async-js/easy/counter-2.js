let n = 0;

function counter() {
  n = n + 1;
  console.clear();
  console.log(n);
  setTimeout(counter, 1000);
}

setTimeout(counter, 1000);
