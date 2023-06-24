/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

function transform(str) {
  let filteredString = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).charCodeAt(0) >= 97 && str.charAt(i).charCodeAt(0) <= 122)
      filteredString += str.charAt(i).toString();
  }
  return filteredString;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  str = transform(str);
  let str1 = reverseString(str);
  return str === str1;
}

module.exports = isPalindrome;
