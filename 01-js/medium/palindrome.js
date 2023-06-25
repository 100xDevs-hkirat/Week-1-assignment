/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // var splitStringArray = str.split("");
  // var reverseArray = splitStringArray.reverse();
  // var joinArray = reverseArray.join("")
  const joinArray = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s/g,'').toLowerCase().split("").reverse().join("");
  if(str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s/g,'').toLowerCase()==joinArray)
  return true;
  return false;
}

module.exports = isPalindrome;
