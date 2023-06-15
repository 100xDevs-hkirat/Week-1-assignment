var count = 0;
var timer = function () {
  setTimeout(function () {
    console.log(count);
    if (count == Infinity) {
      console.log("Counter ends");
    } else {
      count++;
      timer();
    }
  }, 1000);
};

timer();
