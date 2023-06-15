Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


code :


// Function to format the time with leading zeros
function formatTimeWithLeadingZeros(time) {
  return time.toString().padStart(2, '0');
}

// Function to format the time in "HH:MM:SS" format
function formatTime(time) {
  const hours = formatTimeWithLeadingZeros(time.getHours());
  const minutes = formatTimeWithLeadingZeros(time.getMinutes());
  const seconds = formatTimeWithLeadingZeros(time.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

// Function to format the time in "HH:MM:SS AM/PM" format
function formatTimeWithAMPM(time) {
  const hours = formatTimeWithLeadingZeros(time.getHours() % 12 || 12);
  const minutes = formatTimeWithLeadingZeros(time.getMinutes());
  const seconds = formatTimeWithLeadingZeros(time.getSeconds());
  const meridiem = time.getHours() < 12 ? 'AM' : 'PM';
  return `${hours}:${minutes}:${seconds} ${meridiem}`;
}

// Function to update the clock display
function updateClock() {
  const currentTime = new Date();
  const timeFormat1 = formatTime(currentTime);
  const timeFormat2 = formatTimeWithAMPM(currentTime);

  console.clear();
  console.log(`Current Time (HH:MM:SS): ${timeFormat1}`);
  console.log(`Current Time (HH:MM:SS AM/PM): ${timeFormat2}`);
}

// Update the clock every second
setInterval(updateClock, 1000);
