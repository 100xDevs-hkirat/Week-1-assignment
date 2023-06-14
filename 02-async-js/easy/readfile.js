"use strict";

const fs = require("fs");

function readFromFile(path) {
	console.log("reading from file start");
	fs.readFile(path, "utf-8", (err, data) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log(data);
		console.log("expensive task starting");
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
	const timeTaken = t2 - t1;
	console.log(`time taken by this expensive task is ${timeTaken}`);
};
readFromFile("C:\\Users\\Saurabh\\Desktop\\txt.txt");
