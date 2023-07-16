/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^\w]/g, ""); //^ negates everything beside it. So, anything that is not a 'w'(word character), has to be swapped with a ""
  var str1 = str.split('').reverse().join('');
  return (str1 == str) ? true : false;
}

module.exports = isPalindrome;
