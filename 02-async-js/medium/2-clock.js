function getCurrentTime(format) {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let timeFormat = "AM";

  if (format === "HH:MM::SS AM/PM") {
    if (hours >= 12) {
      timeFormat = "PM";
      hours %= 12;
    }
    if (hours === 0) {
      hours = 12;
    }
    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    return `${hours}:${minutes}:${seconds} ${timeFormat}`;
  } else if (format === "HH:MM::SS") {
    return `${hours}:${minutes}:${seconds}`;
  }
}

function padZero(num) {
  return num.toString().padStart(2, "0");
}

setInterval(() => {
  console.log(getCurrentTime("HH:MM::SS AM/PM"));
}, 1000);
