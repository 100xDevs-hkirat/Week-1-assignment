/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/


function isPalindrome(str) {
  
  let str1 = str.toLowerCase();
  str1 = str1.split('').reverse().join('');
  
  str = str.toLowerCase();
  
  return str === str1;
}
console.log(isPalindrome("hipoh"));

//module.exports = isPalindrome;
