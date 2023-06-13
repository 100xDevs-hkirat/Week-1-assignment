/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
	const originalStrArr = splitString(str);

	const reverseStringArr = reverseString(str);
	return originalStrArr.some((str, i) => {
		return reverseStringArr[i] === str;
	})
		? true
		: false;
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
isPalindrome("Nan");
// module.exports = isPalindrome;
