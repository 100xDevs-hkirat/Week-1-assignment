/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const str1=str.toLowerCase().split('')
    for(let i=0;i<str1.length;i++){
       for(let j=str1.length-1;j>=0;j--){
         if(str1[i]===str1[j]){
            return true;
         }else{
            return false;
         }
       }
    }
return str1
  
}

module.exports = isPalindrome;
