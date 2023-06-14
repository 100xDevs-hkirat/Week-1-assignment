/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/



function isPalindrome(str) {
  let _str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let i = 0, j = _str.length-1;
  while(i<=j){
    if(_str[i]!=_str[j])
      return false;

    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;
