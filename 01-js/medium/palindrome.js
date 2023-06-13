/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str
    .toLowerCase()
    .trim()
    .replace(/([^\w ]|_| )/g, "");
  rev = str;
  rev = rev.split("").reverse();
  rev = rev.join("");
  console.log(str + "\n" + rev);
  if (str === rev) return true;
  return false;
}
isPalindrome("Mr. Owl ate my metal worm.");
module.exports = isPalindrome;
