/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function removeExtra(str) {
  const newStr = str.replace(/\s+/g, '').replace(/[^\w]/g, '');
  const output = newStr.toLowerCase();
  return output;
}

function isPalindrome(str) {
  const newStr = removeExtra(str);
  const revString = newStr.split('').reverse().join('');
  return newStr === revString;
}

module.exports = isPalindrome;
