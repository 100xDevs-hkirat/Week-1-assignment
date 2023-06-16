function displayCurrentTime() {
    const updateTime = () => {
        console.clear();
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const seconds = currentTime.getSeconds().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const timeString = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
      console.log('Current Time:', timeString);
    };
  
    // Initial display
    updateTime();
  
    // Update every second
    setInterval(updateTime, 1000);
  }
  
  // Call the function
  displayCurrentTime();
  
  
  
  
  
  
  