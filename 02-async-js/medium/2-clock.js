function getCurrentTime() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const formattedTime24 = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    const formattedTime12 = `${formatHours12(hours)}:${padZero(minutes)}:${padZero(seconds)} ${getAMPM(hours)}`;
    
    console.log('24-hour format:', formattedTime24);
    console.log('12-hour format:', formattedTime12);
  }
  
  function padZero(number) {
    return number.toString().padStart(2, '0');
  }
  
  function formatHours12(hours) {
    return (hours % 12 || 12).toString().padStart(2, '0');
  }
  
  function getAMPM(hours) {
    return hours >= 12 ? 'PM' : 'AM';
  }
  
  // Update the clock every second
  setInterval(getCurrentTime, 1000);
  

  // generate by chatGPT