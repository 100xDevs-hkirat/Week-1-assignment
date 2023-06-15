/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase()

  let start = 0;
  let end = str.length - 1

  while(start <= end){
    if(str[start] !== str[end]){
      return false
    }

    start++;
    end--;
  }

  return true;
}

module.exports = isPalindrome;

console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
