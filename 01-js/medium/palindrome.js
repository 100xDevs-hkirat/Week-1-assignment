/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let string = str.toLowerCase();
  let reversedString = '';

  for(let i = string.length - 1; i>=0;i--){
    reversedString += string[i];
  }

  if(string === reversedString){
  return "its a paliendrome"
    
  }else{
    return "its not a paliendrome"
  }
}

const checkPaliandrome = isPalindrome("appa");
console.log(checkPaliandrome);

module.exports = isPalindrome;