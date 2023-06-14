/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const lowCaseStr = str.toLowerCase();
  const arrStr = lowCaseStr.split("");
  const reverseArr = arrStr.slice().reverse();
  const reverseStr = reverseArr.join(""); // Convert the reversed array back to a string

  if (lowCaseStr === reverseStr) {
    return true;
  } else {
    return false;
  }
}

const output = isPalindrome('okay');
console.log(output);

module.exports = isPalindrome;
