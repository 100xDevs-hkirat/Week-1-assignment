/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.split("").map(s => s.trim().toLowerCase()).filter(s => {
    return /[a-z]+/.test(s);
  }).join("")
  // console.log(str)
  let first = str.slice(0, Math.floor(str.length / 2))
  let second = str.slice(Math.ceil(str.length / 2),).split("").reverse().join("")
  // console.log(first, second)
  if (first === second) { return true }
  else { return false }


}
// console.log(isPalindrome('Eva, can I see bees in a cave?'))
module.exports = isPalindrome;
