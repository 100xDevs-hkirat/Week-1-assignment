/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (milliseconds) {
	
	const start = Date.now();
	while (Date.now() - start < milliseconds) {
		// Empty loop to keep the thread busy
	}
}
	
// Example usage
console.log('Start');
sleep(3000); // Halts the thread for 3 seconds
console.log('End');
	      
