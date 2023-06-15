/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var newString = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  let left = 0;
  let right = newString.length - 1;
  while(left <= right){
    if(newString[left] !== newString[right]) return false
    left++
    right--
  }
  return true
}

console.log(isPalindrome('A man, a plan, a canal. Panama'))
module.exports = isPalindrome;
