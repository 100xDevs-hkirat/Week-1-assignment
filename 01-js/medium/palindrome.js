/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
    let strlower=str.toLowerCase();
    let oppword="";
    for(let i=strlower.length-1;i>=0;i--){
        oppword+=strlower[i]
    }
    if(oppword===strlower){
        return true;
    }
    else{
        return false;
    }
}
var isPalindrome=isPalindrome("Nan")
console.log(isPalindrome)
module.exports = isPalindrome;
