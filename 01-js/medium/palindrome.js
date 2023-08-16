/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  const requiredStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let reversedStr = '';

  for (let i = requiredStr.length - 1; i >= 0; i--) {
    reversedStr += requiredStr[i];
  }

  if (requiredStr !== reversedStr) {
    return false;
  }

  return true;
}

module.exports = isPalindrome;