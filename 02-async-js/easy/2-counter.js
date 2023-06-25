function Timer(n) {
  let counter = n;
  setTimeout(() => {
    counter += 1;
    console.log(counter);
    Timer(counter);
  }, 1000);
}

Timer(0);
