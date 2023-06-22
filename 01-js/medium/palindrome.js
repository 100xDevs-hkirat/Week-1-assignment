/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const str1 = str
  const str2 = str.split('').reverse().join('')

  if (str1 === str2) {
      return true
  }
  return false
  // console.log(str2)
  // return true;
}

module.exports = isPalindrome;

const result = isPalindrome('naveen')

console.log(result)