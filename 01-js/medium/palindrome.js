/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toUpperCase();

  var i=0;
  var j=str.length-1;

  while(j>i)
  {
      if(str[i] == str[j])
      {
        i++;
        j--;
      }
    else
        return false;
  }
  
  return true;
}
console.log(isPalindrome("abba"));
console.log(isPalindrome("cabac"));
module.exports = isPalindrome;
