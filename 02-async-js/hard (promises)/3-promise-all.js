/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
	return new Promise(resolve => {
		setTimeout(resolve, 1000);
	});
}

function waitTwoSecond() {
	return new Promise(resolve => {
		setTimeout(resolve, 2 * 1000);
	});
}

function waitThreeSecond() {
	return new Promise(resolve => {
		setTimeout(resolve, 3 * 1000);
	});
}

function calculateTime() {
	const startTime = new Date().getTime();
	let waitOneSecondRes = waitOneSecond();
	let waitTwoSecondRes = waitTwoSecond();
	let waitThreeSecondRes = waitThreeSecond();
	Promise.all([waitOneSecondRes, waitTwoSecondRes, waitThreeSecondRes]).then(
		() => {
			console.log('resolved all promises');
			console.log(new Date().getTime() - startTime);
		}
	);
}
calculateTime();
