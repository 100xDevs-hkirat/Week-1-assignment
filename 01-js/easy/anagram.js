/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let n = str1.length
  let m = str2.length
  if(n!==m)
    return false;
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  if(str1===str2)
    return true;
  return false;
} 

console.log(isAnagram("abc","xac"))
console.log(isAnagram("abc","bac"))
