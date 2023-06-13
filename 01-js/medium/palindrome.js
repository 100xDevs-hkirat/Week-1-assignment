/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let string = str.toLowerCase();
  for(let i=1;i<=string.length;i++){
    if(string[i-1] != string[string.length - i]){
      return false;
    }
  }
 return true;
}

module.exports = isPalindrome;
