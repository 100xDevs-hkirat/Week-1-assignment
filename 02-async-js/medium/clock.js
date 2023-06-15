const currentDateTime = Date();
const currentDateTimeArray = currentDateTime.split(" ");
const currentDate = currentDateTimeArray.slice(0, 4);
const currentTime = currentDateTimeArray[4];
const currentTimeArray = currentTime.split(":");
let hour = currentTimeArray[0];
let minute = currentTimeArray[1];
let second = currentTimeArray[2];
hour = parseInt(hour);
minute = parseInt(minute);
second = parseInt(second);
second += 1;

setInterval(() => {
  second += 1;
  if (second === 60) {
    second = 0;
    minute += 1;
  }
  if (minute === 60) {
    minute = 0;
    hour += 1;
  }
  if (hour === 24) {
    hour = 0;
  }
  console.log(`HH:MM:SS ${hour}:${minute}:${second}`);
}, 1000);
