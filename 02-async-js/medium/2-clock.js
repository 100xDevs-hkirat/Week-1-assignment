
function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;
  
    // Add leading zeros to minutes and seconds
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
  
    console.clear();
    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds} ${meridiem}`);
  }
  
  setInterval(updateClock, 1000);
