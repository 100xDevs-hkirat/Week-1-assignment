/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
	return new Promise(resolve => {
		setTimeout(resolve, n * 1000); // Multiply by 1000 to convert seconds to milliseconds
	});
}

wait(10)
	.then(() => {
		console.log('Promise resolved after 10 seconds');
	})
	.catch(error => {
		console.error('An error occurred:', error);
	});
