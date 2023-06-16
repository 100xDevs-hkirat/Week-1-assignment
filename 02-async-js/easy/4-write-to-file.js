// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

// Asynchronous Version
function asyncVersion(){
	const fs = require('fs');
	let content = "Written via Asynchronous Version.";
	fs.writeFile("file.txt", content, err => console.log(err));
}

// Synchronous Version
function syncVersion(){
	const fs = require('fs');
	let content = "Written via Synchronous Version.";
	fs.writeFileSync("file.txt", content);
}

// Promise Version
function promiseVersion(){
	const fs = require('fs/promises');
	let content = "Written via Promise Version.";
	fs.writeFile("file.txt", content)
	.then(
		console.log("Data Written")
	)
	.catch(
		err => console.log(err)
	)
}

// asyncVersion();
// syncVersion();
// promiseVersion();