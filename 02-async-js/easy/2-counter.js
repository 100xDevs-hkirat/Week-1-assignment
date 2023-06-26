time = 0;
function getTime() {
	if (time == 10) return;
	time += 1;
	console.clear();
	console.log(time);
	setTimeout(getTime, 1000);
}
setTimeout(getTime, 1000);
