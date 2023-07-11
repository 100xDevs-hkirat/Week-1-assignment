/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let str1_arr = str.toLowerCase().split('');
  let str2_arr = str.toLowerCase().split('').reverse();

  if(str1_arr.toString() == str2_arr.toString())
    return true;
  else
    return false;
}

 const str = 'Madam';
// const str = 'yogi';

let result = isPalindrome(str);

console.log(result);

if(result)
  console.log(str, 'is palindrome');
else
  console.log(str, 'is not palindrome');

module.exports = isPalindrome;
