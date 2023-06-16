// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function updateClock() {
    const currentTime = new Date();
    const options = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
  
    const time24 = currentTime.toLocaleTimeString('en-US', options);
    console.log('24-hour format:', time24);
  
    const time12 = currentTime.toLocaleTimeString('en-US', { hour12: true });
    console.log('12-hour format:', time12);
  
    setTimeout(updateClock, 1000);
  }
  
  // Start the clock
  updateClock();
  