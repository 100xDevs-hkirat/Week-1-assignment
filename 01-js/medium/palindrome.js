/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const arr = str.split("");
  const reversedArr = arr.slice().reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== reversedArr[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
