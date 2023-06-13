/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const reg_ex = /[^A-Za-z0-9]/g;
  const filteredStr = str.toLowerCase().replace(reg_ex,'');
  const reverse_string = filteredStr.split('').reverse().join('')
  if(filteredStr !== reverse_string){
    return false;
  } 
  return true;
}

module.exports = isPalindrome;
