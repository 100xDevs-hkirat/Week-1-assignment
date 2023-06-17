function counter(n) {
  let count = 1;

  const intervvalId = setInterval(() => {
    console.log(count);
    if (count === n) clearInterval(intervvalId);
    else count++;
  }, 1000);
}

counter(10);
