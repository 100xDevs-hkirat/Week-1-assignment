/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // the regex is for removing the special characters and space anywhere
  const modifieldStr= str.replace(/[\W_]+/g,'').toLowerCase();
  const stringLength= modifieldStr.length;
  for(var i=0;i<=(stringLength/2)-1;i++)
  {
    if(modifieldStr.charAt(i)!== modifieldStr.charAt(stringLength-i-1))
    {
      return false
    }
  }
  return true;
}



module.exports = isPalindrome;
