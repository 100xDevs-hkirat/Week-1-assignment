// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?
//
// Can you make it so that it updates every second, and shows time in the following formats -
//
//  - HH:MM::SS (Eg. 13:45:23)
//
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function showTime() {
  var now = new Date();
  var hour = new String(now.getHours()).padStart(2, "0");
  var minute = new String(now.getMinutes()).padStart(2, "0");
  var second = new String(now.getSeconds()).padStart(2, "0");
  var ts = [hour, minute, second].join(":");
  console.log(ts);
  var PM = "AM";
  if (hour > 12) {
    hour = new String(parseInt(hour) - 12).padStart(2, "0");
    PM = "PM";
  }
  var ts = [hour, minute, second].join(":");
  console.log(ts + " " + PM);
}

showTime();
