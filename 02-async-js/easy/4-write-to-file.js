const { writeFile } = require('fs');
const data = 'hello world from 4-write-to-js';
writeFile('./helloworld.txt', data, err => {
	if (err) throw err;
	else {
		console.log('file updated successfully');
	}
});
