/*
  Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
  clock that shows you the current machine time?

  Can you make it so that it updates every second, and shows time in the following formats - 

  - HH:MM::SS (Eg. 13:45:23)

  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function getCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const hoursInAmPm = hours % 12;
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Pad single digits with leading zeros
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedHoursInAmPm = hoursInAmPm.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  console.clear();
  console.log(`Current time in 24hr format: ${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
  console.log(`Current time in 12hr format: ${formattedHoursInAmPm}:${formattedMinutes}:${formattedSeconds} ${amPm}`);
}

setInterval(getCurrentTime, 1000);