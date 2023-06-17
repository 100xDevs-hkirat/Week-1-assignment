const fs = require("fs");

console.log("program started");

fs.readFile("./02-async-js/easy/3-read-from-file.md", "utf-8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data);
});

console.log("loop started");
for (let i = 0; i < 10000000000; i++) {}
console.log("loop ended");
