/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var len=str.length
  var str2="";
  for(var i=len-1;i>=0;i--){
    str2=str2+str.charAt(i); 
    
  }
  
  if(str==str2){
    return true;

  }
  else{
    return false;
  }
  
}
console.log(isPalindrome("mom"));

module.exports = isPalindrome;
