/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var left = 0,
    right = str.length - 1;
  punctuations = "!@#$%^&*()_+|}{\\][';\":/.?>,<]} ";
  while (left <= right) {
    if (punctuations.includes(str[left])) {
      left++;
      continue;
    }
    if (punctuations.includes(str[right])) {
      right--;
      continue;
    }
    if (str[left].toLowerCase() != str[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
