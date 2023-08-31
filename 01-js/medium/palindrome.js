/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  let re = /[\W_]/g;

  let str2 = ((str.toLowerCase()).replace(re, '')).split('').reverse().join('');
  str=((str.toLowerCase()).replace(re, ''))


  if (str == str2)
    return true;
  else
    return false;
}

module.exports = isPalindrome;
