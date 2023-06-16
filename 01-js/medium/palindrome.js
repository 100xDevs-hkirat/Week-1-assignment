/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const n = str.length
  str = str.toLowerCase()
  let i=0, j=n-1
  while(i<j) {
    if(str[i].match(/[a-z]/i)) {
      if(str[j].match(/[a-z]/i)) {
        if(str[i] !== str[j]) {
          return false
        }
        i++
        j--
      } 
      else {
        j--
      } 
    }
    else {
      i++
    }
  }
  return true;
}

module.exports = isPalindrome;
