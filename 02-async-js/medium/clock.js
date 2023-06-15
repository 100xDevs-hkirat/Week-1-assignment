function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  const time = `${formatTwoDigits(hours)}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`;
  const timeAMPM = `${formatTwoDigits(convertTo12Hour(hours))}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)} ${getAMPM(hours)}`;

  console.log(`Time (HH:MM:SS): ${time}`);
  console.log(`Time (HH:MM:SS AM/PM): ${timeAMPM}`);
}

function formatTwoDigits(number) {
  return number.toString().padStart(2, '0');
}

function convertTo12Hour(hours) {
  return hours > 12 ? hours - 12 : hours;
}

function getAMPM(hours) {
  return hours >= 12 ? 'PM' : 'AM';
}

// Update the clock every second
setInterval(getCurrentTime, 1000);
