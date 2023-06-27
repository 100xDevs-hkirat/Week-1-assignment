// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function getCurrentTime() {
  function executeCallback() {
    const currentDate = new Date();
    const options = { timeZone: "Asia/Kolkata", hour12: false };
    const hour = currentDate.toLocaleString("en-US", {
      ...options,
      hour: "numeric",
    });
    const minute = currentDate.toLocaleString("en-US", {
      ...options,
      minute: "numeric",
    });
    const second = currentDate.toLocaleString("en-US", {
      ...options,
      second: "numeric",
    });

    console.log(`Current Time: ${hour}:${minute}:${second}`);

    setTimeout(executeCallback, 1000);
  }
  executeCallback();
}

getCurrentTime();


//or 
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function getCurrentTime() {
    function executeCallback() {
     const currentDate = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour12: true }; 
    const hour = currentDate.toLocaleString('en-US', { ...options, hour: '2-digit' }).padStart(2, '0');
    const minute = currentDate.toLocaleString('en-US', { ...options, minute: '2-digit' }).padStart(2, '0');
    const second = currentDate.toLocaleString('en-US', { ...options, second: '2-digit' }).padStart(2, '0');
    const meridiem = currentDate.toLocaleString('en-US', { ...options, hour: 'numeric', hour12: true }).slice(-2);
   
      console.log(`${hour}:${minute}:${second} ${meridiem}`);
  
      setTimeout(executeCallback, 1000);
    }
    executeCallback();
  }
  
  getCurrentTime();