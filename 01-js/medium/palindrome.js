/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let fStr = str.toLowerCase().replace(" ", "");
  let final = "";

  for (let i = 0; i < fStr.length; i++) {
    if (fStr[i].match("^[a-zA-Z0-9]*$")) {
      final += fStr[i];
    }
  }

  return final.split("").reverse().join("") === final;
}

module.exports = isPalindrome;
