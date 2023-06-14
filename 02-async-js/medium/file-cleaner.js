const fs = require("fs");

function readFile(path) {
	fs.readFile(path, "utf-8", (err, data) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log(data);
		// splitting data with "" and then filtering out with array elem have no element only empty string ""
		const cleanData = data
			.split(" ")
			.filter((w) => {
				if (!w[0]) return;
				return w[0];
			})
			.join(" ");
		writeToFile(path, cleanData);
	});
}
function writeToFile(path, cleanData) {
	fs.writeFile(path, cleanData, "utf-8", (err) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log("data in the file cleaned up ");
	});
}

readFile("C:\\Users\\Saurabh\\Desktop\\txt.txt");
