/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (str.length === 1)
    return "Invalid Format";

  let newStr = [];
  str = str.split('')
  for (let i = str.length - 1; i >= 0; i--) {
    newStr.push(str[i])
  }

  newStr = newStr.join('')
  str = str.join('')

  if (str === newStr) {
    return true;
  }
  else
    return false;
}

let ans = isPalindrome("tenet");
console.log(ans);

module.exports = isPalindrome;
