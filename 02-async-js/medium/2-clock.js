function getDateInFormat() {
	const date = new Date();
	const hour = date.getHours();
	const min = date.getMinutes();
	const sec = date.getSeconds();
	let period = 'AM';
	if (parseInt(hour) >= 12) period = 'PM';
	return `${hour}:${min}:${sec} ${period}`;
}
function printDate() {
	date = getDateInFormat();
	console.clear();
	console.log(date);
}

setInterval(printDate, 1000);
