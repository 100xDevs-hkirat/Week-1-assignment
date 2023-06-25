/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  str1 = str.split('').reverse().join('');
  console.log(str);
  console.log(str1);
  if(str!=str1){
    return false;
  }
  return true;
}
console.log(isPalindrome('Able, was I ere I saw Elba!'));
module.exports = isPalindrome;
