/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var temp = str;
  var str = str.split("");
  var reversedString = str.reverse();
  reversedString = reversedString.join("");
  if (temp === reversedString) return true;
  return false;
}
console.log(isPalindrome("mom"));

module.exports = isPalindrome;
