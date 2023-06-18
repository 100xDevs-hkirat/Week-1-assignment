/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // Convert the string to lowercase
  const lowerCaseStr = str.toLowerCase();

  // Remove non-alphanumeric characters using regular expressions
  const alphanumericStr = lowerCaseStr.replace(/[^a-z0-9]/g, '');

  // Reverse the alphanumeric string
  const reversedStr = alphanumericStr.split('').reverse().join('');

  // Check if the reversed string matches the original alphanumeric string
  return alphanumericStr === reversedStr;
}

module.exports = isPalindrome;

