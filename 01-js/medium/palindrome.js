/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

// change the input to lowercase and remove all spaces and punctuations
var processedString = (str.toLowerCase()).replace(/[^\w]/g, "");

var strLen = processedString.length;

for (var x = 0; x < Math.floor(strLen/2); x++){
  if(processedString[x] != processedString[strLen-1-x]){
    return false;
  }
}

  return true;
}

module.exports = isPalindrome;
