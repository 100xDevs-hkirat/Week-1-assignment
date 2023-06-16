/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
	return new Promise((resolve, _reject) => {
		setTimeout(() => resolve('one'), 1000);
	});
}

function waitTwoSecond() {
	return new Promise((resolve, _reject) => {
		setTimeout(() => resolve('two'), 2000);
	});
}

function waitThreeSecond() {
	return new Promise((resolve, _reject) => {
		setTimeout(() => resolve('three'), 3000);
	});
}

function calculateTime() {
    const start = Date.now();
    waitOneSecond().then((a) => {
        console.log(a)
        waitTwoSecond().then((b)=>{
            console.log(b);
            waitThreeSecond().then((c)=>{
                console.log(c);
                console.log(Date.now() - start);
            })
        })
    });
}


calculateTime();
