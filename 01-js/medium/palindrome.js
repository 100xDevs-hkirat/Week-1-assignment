/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const sanitizedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = sanitizedStr.split("").reverse().join("");
  return sanitizedStr === reversedStr;
}

// console.log(isPalindrome("Naman"));

module.exports = isPalindrome;
