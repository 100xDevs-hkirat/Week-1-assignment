/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

const isAlpha = (ch) => {
  let val = ch.charCodeAt();
  return (val > 64 && val < 91) || (val > 96 && val < 123);
};

function isPalindrome(str) {
  str = str.split("").filter(isAlpha).join("");

  let st = 0;
  let end = str.length - 1;

  while (st < end) {
    if (str[st].toLowerCase() != str[end].toLowerCase()) {
      return false;
    }
    st += 1;
    end -= 1;
  }
  return true;
}

module.exports = isPalindrome;
