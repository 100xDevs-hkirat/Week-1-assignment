var second = new Date().getSeconds();
var minute = new Date().getMinutes();
var hour = new Date().getHours();
var milisecond = 0;
var string_24 = (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second);

var string_12 = "";
var temp = "AM";
if (hour >= 12) {
  temp = "PM";
}
string_12 = (hour%12 < 10 ? "0" + hour%12 : hour%12 )+ ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second<10 ? '0' + second : second) + " " + temp;
console.log(string_24);
console.log(string_12);
function update() {
  console.clear();
  second++;
  if (second === 60) {
    second = 0;
    minute++;
  }
  if (minute === 60) {
    hour++;
    minute = 0;
  }
  if (hour === 24) {
    hour = 0;
    second = 0;
    minute = 0;
  }
  string_24 =
    (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" +
    (second < 10 ? "0" + second : second);
  if (hour === 12) {
    hour = 0;
    if (temp === "AM") temp = "PM";
    else temp = "AM";
  }
  string_12 = (hour % 12 < 10 ? "0" + (hour % 12) : hour % 12) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second) + " " + temp;
  console.log(string_24);
  console.log(string_12);
}

setInterval(update, 1000);
