let count = 0;
function counter() {
	console.clear();
	count++;
	setTimeout(counter, 1000);
	console.log(count);
}

counter();
