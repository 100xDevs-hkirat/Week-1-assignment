const fs = require("fs");

const fileData = fs.readFileSync(
	"./02-async-js/medium/1-file-cleaner.md",
	"utf-8"
);

const newData = fileData.split(' ').filter(item =>item !== "").join(' ')

fs.writeFile("./02-async-js/medium/1-file-cleaner.md", newData, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Operation Successful");
	console.log(
		fs.readFileSync("./02-async-js/medium/1-file-cleaner.md", "utf-8")
	);
});
