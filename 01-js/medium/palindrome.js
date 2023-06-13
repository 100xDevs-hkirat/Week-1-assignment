/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  //* Convert to lowerCase: 
  str = str.toLowerCase();

  //* Split, reverse and join again: 
  str2 = str.split('').reverse().join('');

  //* Compare str and str2: 
  if(str === str2){
      return true;
  }else{
      return false; 
  }
}

const testCase = isPalindrome("nan");
console.log(testCase);

module.exports = isPalindrome;
