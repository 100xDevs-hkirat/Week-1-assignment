function clock() {
	console.clear();
	const currentData = new Date();
	const hours = currentData.getHours();
	const mins = currentData.getMinutes();
	const sec = currentData.getSeconds();

	console.log(`${hours}:${mins}:${sec}`);
}

setInterval(clock, 1000);
