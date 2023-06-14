"use strict ";

const fs = require("fs");

function writeToFile(path, textToWrite) {
	fs.writeFile(path, textToWrite, "utf-8", (err) => {
		if (err) {
			console.log(err.message);
			return;
		}
		console.log("text is written to the file ");
		expensiveTask();
	});
}

const expensiveTask = () => {
	const t1 = new Date();
	let sum = 0;
	for (let i = 0; i < 10000; i++) {
		sum += i;
	}
	console.log(sum);
	const t2 = new Date();
	const timeTaken = (t2 - t1) / 1000;
	console.log(`time taken by this expensive task is ${timeTaken}s`);
};
writeToFile("C:\\Users\\Saurabh\\Desktop\\txt.txt", "hello world");
