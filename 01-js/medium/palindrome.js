/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let reverseStr = str;
  reverseStr = reverseStr.split("").reverse().join("");

  if(str === reverseStr) {
    return true;
  }

  return false;
}

console.log(isPalindrome("avc"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("abba"));



module.exports = isPalindrome;
