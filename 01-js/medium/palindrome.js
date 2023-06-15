/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // reverse the given string (case-insensitive)
  const reverseStr = str.split('').reverse('').join('');

  //check if the reverse str is the same as str and return it 
  return reverseStr === str;
}

module.exports = isPalindrome;
