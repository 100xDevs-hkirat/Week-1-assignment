/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const arr = str.split("");
  console.log(arr);
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] == arr[arrLength-1-i]) {
      console.log("it is a palindrome");
      return true;
    }
  }
}

isPalindrome("nitin");
module.exports = isPalindrome;
