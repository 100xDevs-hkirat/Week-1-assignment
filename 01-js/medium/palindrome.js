/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  const strArr = [];

  for (const char of str) {
    if (char >= "a" && char <= "z") {
      strArr.push(char);
    }
  }

  for (let index = 0; index <= Math.floor(strArr.length / 2); index++) {
    if (strArr[index] !== strArr[strArr.length - index - 1]) return false;
  }
  return true;
}

module.exports = isPalindrome;
