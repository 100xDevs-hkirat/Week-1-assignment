/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const cleanStr = str
    .toLowerCase()
    .split("")
    .filter((char) => char >= "a" && char <= "z")
    .join("");

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) return false;
    else {
      left++;
      right--;
    }
  }
  return true;
}

module.exports = isPalindrome;
