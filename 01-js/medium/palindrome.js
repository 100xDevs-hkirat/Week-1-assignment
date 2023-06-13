/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  if(str.length === 1 || str === ''){
    return true;
  }

  let regex = /[,.+*?!^$()[\]{}|\\@]/g;

  strarray = [...str.toLowerCase()].filter((s) => s !== " " && !regex.test(s));

  for(let i=0; i<strarray.length/2; i++){
    if(strarray[i] !== strarray[strarray.length-1-i]){
      return false;

    }
  }
  return true;
}

module.exports = isPalindrome;
