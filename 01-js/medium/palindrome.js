/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function removePunctuationAndSpaces(inputString) {
  // Use a regular expression to match punctuation and spaces /g is for global and \s is space
  const regex = /[.?,\/#!$%\^&\*;:{}=\-_`~()\s]/g;

  // Replace the matched characters with an empty string
  const resultString = inputString.replace(regex, '');

  return resultString;
}

function isPalindrome(str) {
  const str1 = removePunctuationAndSpaces(str);
  const lowerStr = str1.toLowerCase();
  const strArray = lowerStr.split('');

  let revArray = [];
  for(let i=0; i<strArray.length; i++){ 
    revArray[i] = strArray[strArray.length-i-1];
  }
  const str2 = revArray.join('');
  console.log(str2);

  if(lowerStr == str2){
    return true;
  }
  return false;
}
module.exports = isPalindrome;
