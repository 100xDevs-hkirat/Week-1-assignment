/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str= str.toUpperCase();
  str=str.replace(/[^A-Z]/g,"");

  var arr1 = str.slice("");
 
    var flag=0;
    for (let i = 0; i <=arr1.length/2; i++) {
      if (arr1[i]!==arr1[arr1.length-1-i]) {
        return false;
      }
      
    }
    return true;
 
  
}

module.exports = isPalindrome;
