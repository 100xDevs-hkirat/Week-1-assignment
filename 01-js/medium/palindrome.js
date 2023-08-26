/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const inputString = str.trim().toLowerCase().replace(" ", "");
  for (i = 0; i < inputString.length; i++) {
    const forwardChar = inputString[i];
    const backwardChar = inputString[inputString.length - 1 - i];
    if (forwardChar !== backwardChar) {
      return false;
    }
    return true;
  }
}
let isStringPalidrome = isPalindrome("Rotator");
console.log(isStringPalidrome);

module.exports = isPalindrome;
