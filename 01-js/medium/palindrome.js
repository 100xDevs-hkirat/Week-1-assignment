/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (str.length == 0) {
    return true;
  }

  if (str.length == 1) {
    return true;
  }


const str1 = str.replace(/[^a-z0-9]/gi, '').toLowerCase('');
const n = str1.length;
const halfLength = Math.ceil(str1.length / 2);

for (let i = 0; i < halfLength; i++) {
  if (str1[i] !== str1[n - 1 - i]) {
    return false;
  } else { 
    return true;
  }
}
}
module.exports = isPalindrome ;


