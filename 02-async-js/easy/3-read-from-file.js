// Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

// Using Callback 
function readFileUsingCallback(){

	const fs = require('fs');
	fs.readFile("file.txt", 'utf8', (data, err) => {
		if(data) console.log(data);
		else console.log(err);
	});
}


// Using Promise
function readFileUsingPromise(){
	const fsPromise = require('fs/promises')

	fsPromise.readFile("file.txt", 'utf8')
	.then(
		data => console.log(data)
	)
	.catch(
		err => console.log(err)
	)

}

// Synchronous Version
function readFileSynchronously(){
	const data = fs.readFileSync("file.txt", 'utf8');
	console.log(data);
}

// readFileUsingCallback();
// readFileUsingPromise();
// readFileSynchronously();