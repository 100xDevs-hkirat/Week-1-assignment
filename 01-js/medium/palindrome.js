/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
	if (str.length === 0 || typeof str !== "string") return;
	const newStr = str.replace(/[@!#$%^&*(),<>:;_+?/\/.0-9]|'s/g, "");

	const originalStrArr = splitString(newStr).join("").split(" ").join("");

	const reverseStringArr = reverseString(newStr).join("").split(" ").join("");
	return reverseStringArr === originalStrArr;
	// return originalStrArr.every((str, i) => {
	// 	return reverseStringArr[i] === str;
	// })
	// 	? true
	// 	: false;
}
function splitString(str) {
	return str.trim().toLowerCase().split("");
}
function reverseString(str) {
	const strArr = splitString(str);
	const originalArr = strArr;

	let revArr = [];
	originalArr.map((str, i) => {
		revArr[strArr.length - 1 - i] = str;
	});

	return revArr;
}
console.log(isPalindrome("Mr. Owl ate my metal worm."));
// console.log(isPalindrome("Nan's"));
// module.exports = isPalindrome;
// function newString(str) {
// 	const newStr = str.replace(/[@!#$%^&*(),<>:;_+?/\/.0-9]|'s/g, "");
// 	console.log(newStr);
// }
// newString("heloo dfaf afffajf 3434f%%% faffaklfjf)/?");
