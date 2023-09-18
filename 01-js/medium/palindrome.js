/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const letters = str
    .toLowerCase()
    .replace(/[\W_ ]/g, "")
    .split("");
  const reversedLetters = letters.slice().reverse();
  let isPalindrome = true;

  for (let i = 0; i < letters.length; i++) {
    console.log(letters[i], reversedLetters[i]);
    if (letters[i] !== reversedLetters[i]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

module.exports = isPalindrome;

console.log(isPalindrome("Able, was I ere I saw Elba!"));
