/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const modifiedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Create the reversed version of the modified string
  const reversedStr = modifiedStr.split('').reverse().join('');

  // Compare the modified string with its reversed version
  return modifiedStr === reversedStr;
}

module.exports = isPalindrome;

