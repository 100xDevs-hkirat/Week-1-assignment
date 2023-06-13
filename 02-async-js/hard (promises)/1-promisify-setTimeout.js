/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
	if (typeof +n !== "number" || isNaN(n)) {
		throw new Error("Not a number give a number as input");
	}
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, n * 1000);
	});
	return promise;
}

try {
	wait(4)
		.then(() => {
			console.log("Resolved now");
		})
		.catch((err) => {
			console.log(`Error: ${err.message}`);
		});
} catch (error) {
	console.log(`Error: ${error.message}`);
}
