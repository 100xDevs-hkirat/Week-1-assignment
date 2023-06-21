/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function removeCharacters(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if(str[i] === ' ' || str[i] === ',' || str[i] === '!' || str[i] === '?' || str[i] === '.') {

    } else {
      answer += str[i];
    }
  }
  return answer;
}

function isPalindrome(str) {
  str = str.toLowerCase()

  //used regular expression to remove the whitespaces and characters like , . ? ! etc
  // str = str.replace(/[\s\p{P}]/gu, '');

  str = removeCharacters(str);
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str.charAt(i) != str.charAt(len - i - 1)) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
