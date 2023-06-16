/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var lowercase_Str = str.toLowerCase();
  var text = '';
  for (var index = 0; index < lowercase_Str.length; index++) {
    text += lowercase_Str[lowercase_Str.length - index - 1];
  }
  if (text === lowercase_Str) {
    return true
  } else {
    return false;
  }
}

module.exports = isPalindrome;
