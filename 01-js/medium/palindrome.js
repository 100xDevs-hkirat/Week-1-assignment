/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (!str) return true;

  let s = "";
  for (let i = str.length - 1; i >= 0; i--) {
    s += str.charAt(i);
  }

  return s === str;
}

module.exports = isPalindrome;
