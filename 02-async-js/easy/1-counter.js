time = 0;
function getTime() {
	console.clear();
	time += 1;
	console.log(time);
}
setInterval(getTime, 1000);
