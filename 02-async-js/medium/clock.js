"use strict";
//  HH:MM::SS (Eg. 13:45:23) Formate-1
function clock1() {
	const date = new Date();
	const hour = String(date.getHours()).padStart(2, "0");
	const minute = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");

	console.log(`${hour}:${minute}::${seconds}`);
}
// setInterval(clock1, 1000);

//HH:MM::SS AM/PM (Eg 01:45:23 PM) Formate-2
function clock2() {
	const date = new Date();
	let hour = String(date.getHours()).padStart(2, "0");
	hour = +hour >= 12 ? hour - 12 : hour;
	const minute = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	let Meridiem = date.getHours() >= 12 ? "PM" : "AM";
	console.log(`${hour}:${minute}::${seconds} ${Meridiem}`);
}
// setInterval(clock2, 1000);
