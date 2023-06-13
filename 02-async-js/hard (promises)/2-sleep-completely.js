/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
// I am using promise
function sleep(seconds) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, seconds * 1000);
	});
}
console.log("sleeping");
sleep(4).then(() => {
	console.log("awake");
});
