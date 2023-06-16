function getCurrentTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formatted24Hours = `${zeroPadding(hours)}:${zeroPadding(
    minutes
  )}:${zeroPadding(seconds)}`;
  const formatted12Hours = format12Hour(hours, minutes, seconds);

  console.log(`Current Time (24-hour format): ${formatted24Hours}`);
  console.log(`Current Time (12-hour format): ${formatted12Hours}`);
}

function zeroPadding(num) {
  return String(num).padStart(2, "0");
}

function format12Hour(hours, minutes, seconds) {
  const meridiem = hours >= 12 ? "PM" : "AM";
  const twelveHour = hours % 12 || 12;
  return `${zeroPadding(twelveHour)}:${zeroPadding(minutes)}:${zeroPadding(
    seconds
  )} ${meridiem}`;
}

// Display current time every second
setInterval(getCurrentTime, 1000);
