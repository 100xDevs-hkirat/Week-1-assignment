// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// Version 1 : Counter without stop (Works in browser & console)
function counterWithoutStop() {
	let count = 0;
	
	function updateSrn() {
	  console.clear();
	  count++;
	  console.log(count);
	  setTimeout(updateSrn, 1000);
	}
	
	updateSrn();
}



