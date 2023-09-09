/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let count =0;
  let k = str.length-1;
  for(let i=0;i<Math.floor(str.length/2);i++){
    if(str.charAt(i)===str.charAt(k)){
      count++;
      k--;
    }
  }
  if(count === Math.floor(str.length/2)){
    return true;
  }
  else{
    return false;
  }
}


console.log(isPalindrome('hannah'));

module.exports = isPalindrome;
