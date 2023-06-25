/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const string = str
    .toLowerCase()
    .replace(/\s/g, "") //removing space from inbtw so that can be compaired easily
    .replace(/[^A-Za-z]+/g, ""); //to filer only alphabets from a string that may contain other characters as well
  let reverseString = string.split("").reverse().join("");
  // for (let i = string.length - 1; i > -1; i--) { //for loop can be used but we have reverse func to make our work easy
  //   reverseString = reverseString + string[i];
  // }
  console.log(string);
  console.log(reverseString);
  return string === reverseString ? true : false;
}

module.exports = isPalindrome;
