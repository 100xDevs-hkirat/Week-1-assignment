/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var s = str.toLowerCase();
  var l = 0;
  var r = str.length - 1;
  while (l <= r) {
    var l_val = s.charCodeAt(l);
    var r_val = s.charCodeAt(r);
    if (!((65 <= l_val && l_val <= 90) || (97 <= l_val && l_val <= 122))) {
      l++; 
      continue;
    }
    if (!((65 <= r_val && r_val <= 90) || (97 <= r_val && r_val <= 122))) {
      r--; 
      continue;
    }

    if (s[l] != s[r]) {
      return false;
    }
    ++l;
    --r;
  }
  return true;
}

module.exports = isPalindrome;
