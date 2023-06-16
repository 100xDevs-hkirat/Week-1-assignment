function countDown(n) {
  let c = 1;
  let timerId = undefined;
  timerId = setInterval(() => {
    if (c > n) {
      clearInterval(timerId);
      return;
    }
    console.log(c++);
  }, 1000);
}

module.exports = countDown;
