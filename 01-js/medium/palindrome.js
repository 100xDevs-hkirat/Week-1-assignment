/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let t = str.toLowerCase();
  let isPal = false;
  for(var i=0; i<t.length/2; i++){
    if(t[i] === t[t.length-1-i]){
      isPal=true;
    }
    else{
      isPal=false;
      break;
    }
  }
  console.log("Is it palindrome " , isPal);
  return isPal;
}

isPalindrome("abcedcba");

module.exports = isPalindrome;
