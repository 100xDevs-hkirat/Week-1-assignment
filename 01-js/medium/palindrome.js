/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const lowerStr = str.toLowerCase().replace(/[^\w]/g, "");
  const reversedStr = lowerStr.split("").reverse().join("");
  return lowerStr === reversedStr;
}
console.log(isPalindrome("Nan")); // Expected output: true
console.log(isPalindrome("racecar")); // Expected output: true
console.log(isPalindrome("hello")); // Expected output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Expected output: true
module.exports = isPalindrome;
