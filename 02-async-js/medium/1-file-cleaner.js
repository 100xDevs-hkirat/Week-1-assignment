import fs from 'fs';

function fileCleaner(fileName) {
	fs.readFile(fileName, 'utf-8', (err, data) => {
		if (err) {
			console.log(err);
		}
		const cleanedData = data.split(' ');
		let cleanArr = [];
		for (let i = 0; i < cleanedData.length; i++) {
			if (cleanedData[i].length > 0) {
				cleanArr.push(cleanedData[i]);
			}
		}
		const finalData = cleanArr.join(' ');
		writeToFile(finalData);
	});
}

function writeToFile(data) {
	fs.writeFile('../assets/cleanedData.txt', data, 'utf8', (err) => {
		if (err) console.log(err);
	});
}

fileCleaner('../assets/fileCleaner.txt');
