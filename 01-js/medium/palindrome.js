/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
/*
function isPalindrome(str) {
  // [^\w] Match a single character not present in the list below
  // \w matches any word character (equivalent to [a-zA-Z0-9_])
  // /g is for global. All matches (don't return after first match)
  const sanitizedStr = str.replace(/[^\w]/g, "").toLowerCase();

  // Reverse the sanitized string
  const reversedStr = sanitizedStr.split("").reverse().join("");

  // Check if the sanitized string is equal to its reversed version
  return sanitizedStr === reversedStr;
}
*/
function getSanitizedStr(str) {
	const punctuation = [',', '.', '!', '?', "'", ' ', '-', '"'];
	let sanitizedStr = '';
	for (s of str) {
		if (!punctuation.includes(s)) {
			sanitizedStr += s;
		}
	}
	return sanitizedStr;
}
function isPalindrome(str) {
	str = getSanitizedStr(str).toLowerCase();
	str_l = Math.floor(str.length / 2);
	str_1 = str.slice(0, str_l);
	str_2 = str.slice(str.length - str_l, str.length);
  str_2 = str.slice(str.length - str_l, str.length).split("").reverse().join("")
	return str_1 == str_2;
}

module.exports = isPalindrome;
