/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  let str1 = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")
  console.log(str1)
  let str2 = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,"").split("").reverse().join("")
  console.log(str2)
  

  if(str1 === str2) return true
  else return false
}

module.exports = isPalindrome;