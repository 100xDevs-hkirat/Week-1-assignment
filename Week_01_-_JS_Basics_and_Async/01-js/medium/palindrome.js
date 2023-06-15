/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "")
  var charArr = str.toUpperCase().split('')
  for(var i=0;i<str.length/2+1;i++){
    if(charArr[i] != charArr[str.length-1-i])
    return false
  }

  return true;
}


// My call to isPalindrome()
console.log(isPalindrome("arora"))
module.exports = isPalindrome;


