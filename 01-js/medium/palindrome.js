/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/


  
function isPalindrome(str) {
  if (str.length === 0) {
    return true;
  }

  const alphanumericRegex = /[a-zA-Z0-9]/g;
  const str1 = str.toLowerCase().match(alphanumericRegex);

  if (!str1) {
    return false;
  }

  const len = str1.length;

  for (let i = 0; i < len / 2; i++) {
    if (str1[i] !== str1[len - 1 - i]) {
      return false;
    }
  }

  return true;
}
