/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function hasPunctuation(str) {
  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
  return punctuationRegex.test(str);
}
function filterString(str){
  let chars = [];
  for(let i = 0; i < str.length; i++){
    if (!(str[i] === ' ' || hasPunctuation(str[i]))) chars.push(str[i].toLowerCase());
  }
  return chars.join('');
}
function isPalindrome(str) {
  let filteredStr = filterString(str);
  // console.log(filteredStr);
  let n = filteredStr.length;
  let j = n-1;
  for (let i = 0; i < Math.floor(n/2); i++){
    if (filteredStr[i] !== filteredStr[j]) return false;
    j--;
  }
  return true;
}
console.log(isPalindrome("race car"));
module.exports = isPalindrome;
