/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function hasSpecialCharacters(str) {
  str = str.toLowerCase();
  const regex = /[!@#$%^&*(),.?":{}|<>\s]/g;
  str = str.replace(regex, "");

  return str;
}

function isPalindrome(str) {
  str = hasSpecialCharacters(str);
  if (str.length <= 2) {
    return true;
  } else {
    for (let i = 0; i < str.length / 2; i++) {
      if (!(str[i] === str[str.length - i - 1])) {
        return false;
      }
    }
  }
  return true;
}
// let str = "abdA  ba!  ";
// const regex = /[!@#$%^&*(),.?":{}|<>\s]/g;
// str = str.replace(regex, "");
const ans = isPalindrome("abaA  ba!  ");
console.log(ans);

module.exports = isPalindrome;
