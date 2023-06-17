let count = 0;
function counterFunct() {
	console.clear();
	console.log(count);
	count = count + 1;
}

setInterval(counterFunct, 1000);
