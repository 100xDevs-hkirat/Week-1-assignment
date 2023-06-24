import fs from 'fs';

fs.readFile('../assets/sample.txt', 'utf8', (err, data) => {
	if (err) {
		console.log(err);
	}
	console.log(data);
});

function calculateSum(n) {
	let sum = 0;
	for (let i = 0; i <= n; i++) {
		sum += i;
	}
	console.log(sum);
}

calculateSum(1000);
