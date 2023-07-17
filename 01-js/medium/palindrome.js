/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const strl = str.toLowerCase().split('');
  let left = 0;
  let right = str.length-1;

  while(left != right) {
    if (strl[left--] !== strl[right++]) return false;
  }
  
  return true;
}

module.exports = isPalindrome;
