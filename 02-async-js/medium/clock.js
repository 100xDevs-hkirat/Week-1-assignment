let seconds = 0;
let minutes = 0;
let hours = 0;

let seconds12 = 50;
let minutes12 = 59;
let hours12 = 11;
let isAm = true;

function format(n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
}

function twentyFourHourFormat() {
  if (seconds < 60) {
    seconds += 1;
  } else if (seconds == 60) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes == 60) {
    hours += 1;
    minutes = 0;
  }
  if (hours == 24) {
    hours = 0;
    minutes = 0;
    seconds = 0;
  }
  console.clear();
  console.log(
    `24 Hour: ${format(hours)}:${format(minutes)}:${format(seconds)}`
  );
}

function twelveHourFormat() {
  if (seconds12 < 60) {
    seconds12 += 1;
  } else if (seconds12 == 60) {
    seconds12 = 0;
    minutes12 += 1;
  }
  if (minutes12 == 60) {
    hours12 += 1;
    minutes12 = 0;
  }
  if (hours12 == 13) {
    hours12 = 1;
    minutes12 = 0;
    seconds12 = 0;
  }
  if (hours12 == 12 && minutes12 == 0 && seconds12 == 0) {
    isAm = !isAm;
  }
  console.clear();
  console.log(
    `12 Hour: ${format(hours12)}:${format(minutes12)}:${format(seconds12)} ${
      isAm ? "AM" : "PM"
    }`
  );
}

setInterval(twelveHourFormat, 1000);
// setInterval(twentyFourHourFormat, 1000);
