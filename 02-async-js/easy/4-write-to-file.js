import fs from 'fs';

fs.writeFile('../assets/writefile.txt', 'Hello World', 'utf-8', (err) => {
	if (err) {
		console.log('Error:', err);
	}
});
