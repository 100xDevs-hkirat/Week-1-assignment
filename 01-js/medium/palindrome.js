/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let startIdx = 0,
    endIdx = str.length - 1

  while (startIdx <= endIdx) {
    if (str[startIdx].toLowerCase() !== str[endIdx].toLowerCase()) return false
    startIdx++
    endIdx--
  }

  return true
}

console.log(isPalindrome('Nan'))

module.exports = isPalindrome
