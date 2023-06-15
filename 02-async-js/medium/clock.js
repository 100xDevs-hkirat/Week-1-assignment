setInterval(() => {
	const date = new Date();
	console.log(
		`${date.getHours() % 12}:${date.getMinutes()}:${date.getSeconds()} ${
			date.getHours() / 12 < 1 ? "AM" : "PM"
		}`
	);
}, 1000);
