/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let s = "";
  for ( let i =str.length-1;i>=0;i--){
    s+=str[i];
  }
  s=s.toLowerCase();
  str=str.toLowerCase();

  str = str.replace(/\s/g, '');
  s=s.replace(/\s/g, '');

  s = s.replace(/[^a-z]/g, '');
  str = str.replace(/[^a-z]/g, '');

  if ( s == str)return true;
  return false;

}

 module.exports = isPalindrome;
