// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

const { clear } = require("console");

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function showTime() {
	const now = new Date();
	console.clear();
	// HH:MM::SS format
	const time1 = now.toLocaleTimeString('en-US', { hour12: false });
	console.log(`Time in HH:MM::SS format: ${time1}`);
	
	// HH:MM::SS AM/PM format
	const time2 = now.toLocaleTimeString('en-US', { hour12: true });
	console.log(`Time in HH:MM::SS AM/PM format: ${time2}`);
}
      
setInterval(showTime, 1000);
      