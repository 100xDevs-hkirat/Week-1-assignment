function counter(n) {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => console.log(i), 1000 * i);
  }
}

counter(10);
