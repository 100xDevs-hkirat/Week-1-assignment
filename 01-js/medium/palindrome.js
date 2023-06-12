/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  str.toLowerCase();
  var reverserstr = '';

  for (var i = str.length-1; i >= 0; i--) {
    // console.log(str[i]);
    reverserstr= reverserstr.concat(str[i]);
  }

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== reverserstr[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
