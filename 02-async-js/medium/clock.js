function printTime() {
  var time = new Date();
  var format = time.getHours() > 12 ? "PM" : "AM";

  var hours = time.getHours();
  hours = hours > 12 ? hours - 12 : hours;

  var mintue = time.getMinutes();
  mintue = mintue < 10 ? "0" + mintue : mintue;

  var sec = time.getSeconds();
  sec = sec < 10 ? "0" + sec : sec;

  const ans = hours + ":" + mintue + ":" + sec + " " + format;
  console.log(ans);
}

function clock() {
  console.clear();
  printTime();
}

setInterval(clock, 1000);
