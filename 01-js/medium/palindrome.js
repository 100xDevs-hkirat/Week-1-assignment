/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let str1 = '';
  for(let i=0;i<str.length;i++){
    if((str[i]>='a' && str[i]<='z') || (str[i]>='A' && str[i]<='Z')){
      str1+=str[i];
    }
  }
  str1 = str1.toLowerCase(str1);
  let temp = '';
  for(let i=str1.length-1;i>=0;i--){
    temp += str1[i];
  }
  if(str1 == temp)return true;
  return false;
}

module.exports = isPalindrome;