const { time } = require('console');
const fs = require('fs');

fs.readFile('./helloworld.txt', (err, data) => {
	if (err) throw err;
	else {
		console.log(data.toString());
	}
});
counter = 0;
function getTime() {
	counter++;
	console.log(counter);
}
setTimeout(getTime, 10);
console.log('completed reading');
