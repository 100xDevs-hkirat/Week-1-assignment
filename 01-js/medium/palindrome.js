/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.replace(/[^\w]|_/g, "").replace(/\s+/g, '').toLowerCase();
  let temp_str = '';
  for(let counter = str.length; counter > 0; counter--)
    temp_str += str.charAt(counter-1);
  return temp_str === str;
}

module.exports = isPalindrome;
