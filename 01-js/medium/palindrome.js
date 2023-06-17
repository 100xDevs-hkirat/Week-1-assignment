/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
//Akash
function isPalindrome(str) {
  //let match = true;
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str.charAt(left).toLowerCase() == str.charAt(right).toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
console.log("Is pallindrome:" + isPalindrome("Mam"));
module.exports = isPalindrome;
