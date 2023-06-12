/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
	str = str.trim();
	const avoid = [',', '?', '!', '.'];
	for (let i of avoid) {
		str = str.replaceAll(i, '');
	}
	str = str.split(' ').join('');
	str = str.toLowerCase();
	let s = 0,
		e = str.length - 1;
	while (s < e) {
		if (str[s] !== str[e]) return false;
		s += 1;
		e -= 1;
	}
	return true;
}

module.exports = isPalindrome;
