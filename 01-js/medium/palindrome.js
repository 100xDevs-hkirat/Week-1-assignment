/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var word = str.toLowerCase();

  let j = word.length - 1;
  for (let i = 0; i < word.length/2;) {
    let fromLeft = word[i];
    if(!fromLeft.match(/[a-z]/gi)) {
      i++; continue;
    }

    let fromRight = word[j];
    if(!fromRight.match(/[a-z]/gi)) {
      j--; continue;
    }

    if(fromLeft != fromRight) {
      return false;
    }
    
    i++; j--;
  }
  return true;
}

module.exports = isPalindrome;
