/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
   str = str.replace(/[^a-zA-Z//s]/g, "");
    console.log(str)
    let s = str.toLowerCase();
    let start = 0;
    let end = str.length - 1;
  
    while (start < end) {
      if (s[start] !== s[end]) return false;
      console.log(s[start])
      console.log(s[end])
      start++;
      end--;
    }
  return true;
}
console.log(isPalindrome("Able, was I ere I saw Elba!"))
module.exports = isPalindrome;
