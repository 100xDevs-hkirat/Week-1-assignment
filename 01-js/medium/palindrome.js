/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if(str.toLowerCase().replace(/[^a-z]/g, "") === str.toLowerCase().replace(/[^a-z]/g, "").split("").reverse().join("")) {
    return true;
  }
  return false;
}

// console.log(isPalindrome("!baab!!"));
module.exports = isPalindrome;
