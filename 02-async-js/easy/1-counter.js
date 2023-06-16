// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// Version 1 : Counter without stop (Works in browser & console)
function counterWithoutStop(){
	let count = 0;
	console.log(count);
	setInterval( function updateSrn(){
		console.clear();
		count++;
		console.log(count);
	}, 1000);
}

// Version 2 : Counter with stop when a key is pressed (works in browser only)
function counterWithStopBrowserOnly() {
	let count = 0;
	console.log(count);
      
	const interval = setInterval(updateSrn, 1000);
      
	function updateSrn() {
	  console.clear();
	  count++;
	  console.log(count);
	}
      
	document.addEventListener("keydown", function (event) {
	  clearInterval(interval);
	});
      }
      

// Version 3 : Counter stops when a key is pressed in console (works in console only)

function counterWithStopConsoleOnly() {

	const readline = require('readline');
	let count = 0;
	console.log(count);

	const interval = setInterval(updateSrn, 1000);

	function updateSrn() {
	console.clear();
	count++;
	console.log(count);
	}

	const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
	});

	rl.input.on('keypress', () => {
	clearInterval(interval);
	rl.close();
	});
}

// counterWithoutStop(); 
// counterWithStopConsoleOnly();
// counterWithStopBrowserOnly();


      



