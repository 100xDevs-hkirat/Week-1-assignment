/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  //remove white spaces
  str = str.replace(/\s/g, "");
  //remove non word 
  str = str.replace(/[^\w\s]|_/g, "");

  str = str.toLowerCase()
  left = 0
  right = str.length - 1
  while (left < right) {
    if (str[left] != str[right]) {
      return false
    }
    left = left + 1
    right = right - 1
  }
  return true;
}

module.exports = isPalindrome;
