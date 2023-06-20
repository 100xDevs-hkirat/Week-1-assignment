/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const lowerCaseStr = str.toLowerCase();
  let n = str.length;
  let strWOpunctuation = "";

  for (let i = 0; i < n; i++) {
    const curr = lowerCaseStr[i];
    if (curr.charCodeAt() > 96) {
      strWOpunctuation += curr;
    }
  }

  n = strWOpunctuation.length;
  const halfLength = n / 2;

  for (let i = 0; i < halfLength; i++) {
    if (strWOpunctuation[i] != strWOpunctuation[n - i - 1]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
