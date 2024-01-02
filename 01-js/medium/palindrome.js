/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var l =0;
  var r = str.length -1;
  while(l<r){
    if(str[l].toLowerCase() != str[r].toLowerCase()){
      return false;
    }
    l++;
    r--;
  }

  return true;
}
// console.log(isPalindrome("NamAn"));
// console.log(isPalindrome("gaioegjhie"));
module.exports = isPalindrome;
