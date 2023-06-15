/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let strToCheck = "";
  let len = str.length;
  for (let i = 0; i < len; i++) {
    const c = str[i].toLowerCase();
    if (c.toUpperCase() !== c) {
      strToCheck += c;
    }
  }

  len = strToCheck.length;
  for (let i = 0; i < len / 2; i++) {
    if (strToCheck[i] !== strToCheck[len - i - 1]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
