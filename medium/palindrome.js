/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // Remove spaces and convert to lowercase
  let cleanedString = str.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

  // Reverse the cleaned string
  let reverseString = cleanedString.split("").reverse().join("");
 
  // Check if the cleaned string is equal to its reverse
  return cleanedString === reverseString;
}

module.exports = isPalindrome; 

