let hour = 0;
let minute = 0;
let second = 0;
let am = true;

function init() {
  let cur = new Date();
  hour = cur.getHours();
  minute = cur.getMinutes();
  second = cur.getSeconds();

  if(hour >= 12) {
    am = false;
    if(hour > 12) {
      hour -= 12;
    }
  }
}

function updateClock() {
  second++;
  if(second >= 60) {
    minute++;
    second -= 60;
  }
  if(minute >= 60) {
    hour++;
    minute -= 60;
  }
  if(hour >= 12) {
    am = !am;
    if(hour > 12) {
      hour -= 12;
    }
  }

  let curTime = hour.toString().padStart(2, '0') + ":";
  curTime += minute.toString().padStart(2, '0') + ":";
  curTime += second.toString().padStart(2, '0');
  curTime += " " + am ? "AM" : "PM";

  console.clear();
  console.log(curTime);
}

init();
setInterval(updateClock, 1000);