const fs = require("fs");
const data = fs.readFileSync("./02-async-js/easy/4-write-to-file.md", "utf-8");

fs.writeFile(
	"./02-async-js/easy/4-write-to-file.md",
	data + "\nNew line has been added",
	(err) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log("operation successful");
		console.log(
			fs.readFileSync("./02-async-js/easy/4-write-to-file.md", "utf-8")
		);
	}
);
