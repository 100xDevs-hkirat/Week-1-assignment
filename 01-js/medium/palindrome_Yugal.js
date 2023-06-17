/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function isPalindrome(str) {
  /* making two variable one with previous value "a" and one 
     with reverse value "b".
     And equating both for favourable reason
*/
  x = str.toLowerCase()// for removing error on upper case character
  var a = x;
  var b = x.split("").reverse().join("");
  if (a === b){
   console.log("str is palindrome")
  }
  else{
    console.log("str is not palindrome")
  }
  
  return true;
}
// for true response
isPalindrome("Radar")
//for false response
isPalindrome("yugal")
module.exports = isPalindrome;
