const fs = require('fs');

function getUpdatedData(data) {
	splitted_arr = data.split(' ').filter(a => a.trim());
	data = splitted_arr.join(' ');
	return data;
}
fs.readFile('./clutter.txt', (err, data) => {
	if (err) throw err;
	else {
		data = getUpdatedData(data.toString());
		fs.writeFile('./clutter.txt', data, 'utf8', err => {
			if (err) throw err;
		});
	}
});
