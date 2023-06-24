/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log('Resolved after 1 sec'));
		}, 1000);
	});
}

function waitTwoSecond() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log('Resolved after 2 secs'));
		}, 2000);
	});
}

function waitThreeSecond() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log('Resolved after 3 sec'));
		}, 3000);
	});
}

function calculateTime() {
	const timeAtStart = Date.now();
	return Promise.all([
		waitOneSecond(),
		waitTwoSecond(),
		waitThreeSecond(),
	]).then((val) => {
		console.log('all resolved');
		const timeAtEnd = Date.now();
		console.log((timeAtEnd - timeAtStart) / 1000);
	});
}

calculateTime();
