/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function delay(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

function waitOneSecond() {
	return delay(1000)
}

function waitTwoSecond() {
	return delay(2000)
}

function waitThreeSecond() {
	return delay(3000)
}

function calculateTime() {
	const startTime = Date.now();

	waitOneSecond()
	.then(
		() => waitTwoSecond()
	)
	.then(
		() => waitThreeSecond()
	)
	.then(	() => {
		const endTime = Date.now();
		console.log(endTime - startTime);
		}
	)
	
}	


calculateTime();