/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  store = str.toLowerCase().split("");
  let reversed = [];
  for (let j = store.length -1; j>=0 ; j--)
  {
      reversed.push(store[j]) ;
  }
  for(let i =0; i< store.length ; i++)
  {
      if (store[i] !== reversed[i])
      {
          return false;
      }
      else
      {
          return true;
      }
  }
 
}
module.exports = isPalindrome;
