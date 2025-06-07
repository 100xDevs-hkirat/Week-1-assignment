/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

exports.isPalindrome = (str) => {
  let reverse = str.slice(0);
  let reverseArr = reverse.split("");

  let arr = [];
  for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
    arr[j] = reverseArr[i];
  }

  const reversedStr = arr.join("");
  return str === reversedStr;
};
