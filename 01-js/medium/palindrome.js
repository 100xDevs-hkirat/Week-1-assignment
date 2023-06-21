/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function check(s) {
  let left = 0;
  let right = s.length - 1;

  while(left <= right) {
    if(s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false
    }
  }
  return true;
}

function isPalindrome(str) {
  const regex = /[^a-zA-Z]/g;
  const clean = str.replace(regex, '').toLowerCase();

  return check(clean)
}


console.log(isPalindrome("hehh"))


module.exports = isPalindrome;
