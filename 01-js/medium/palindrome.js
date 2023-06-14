/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
// @!#$%^&*(),<>:;_+?/\/.0-9
function isPalindrome(str) {
	if (str === "") return true;

	if (typeof str !== "string") return;
	const newStr = str.replace(/[^a-zA-Z0-9]/g, "");

	const originalStrArr = splitString(newStr).join("");
	const reverseStringArr = reverseString(newStr).join("");
	console.log(originalStrArr, reverseStringArr);
	return reverseStringArr === originalStrArr;
}
function splitString(str) {
	return str.toLowerCase().split("");
}
function reverseString(str) {
	const strArr = splitString(str);

	const originalArr = strArr;

	let revArr = [];
	originalArr.map((str, i) => {
		revArr[strArr.length - 1 - i] = str;
	});
	console.log(revArr);
	return revArr;
}
console.log(isPalindrome("Mr. Owl ate my metal worm."));
module.exports = isPalindrome;
