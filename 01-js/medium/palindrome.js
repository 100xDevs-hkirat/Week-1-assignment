/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();

  // Remove non-alphanumeric characters using regular expression
  str = str.replace(/[^a-z0-9]/g, '');

  // Check if the reversed string is equal to the original string
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}


module.exports = isPalindrome;
