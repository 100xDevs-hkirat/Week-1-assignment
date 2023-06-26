/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
	let startTime = new Date().getTime();
	while (new Date().getTime() - startTime <= seconds * 1000) {
		continue;
	}
	console.log(new Date().getTime() - startTime);
}
console.log('before sleep');
sleep(5);
console.log('after sleep');
