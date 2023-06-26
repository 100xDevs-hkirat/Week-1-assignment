/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let str1 = str;
  let str2 = str.split('').reverse().join('');// split--> converts the string into an array;  reverse--> reverses the array ; join--> joins the array and turns back to string
  for( var i = 0 ; i< str.length ; i++){
    if(str1[i] !== str2[i]){
      return false;
    }
  }
  return true;

}

console.log(isPalindrome('mom'));

module.exports = isPalindrome;
