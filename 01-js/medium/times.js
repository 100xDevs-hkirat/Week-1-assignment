/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
	if (typeof +n !== "number") return;
	let sum = 0;
	const t1 = new Date();
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	const t2 = new Date();
	return { [sum]: `${(t2 - t1) / 1000}s` };
}
console.log(calculateTime(1000000000));
