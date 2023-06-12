/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length !==str2.length){
          return false
      }
      var str1lower=str1.toLowerCase();
      var str2lower=str2.toLowerCase();

      str1lower=str1lower.split("").sort().join();
      str2lower=str2lower.split("").sort().join();

      if(str1lower===str2lower){
          return true;
      }
      else{
          return false;
  }
  console.log(isAnagram("str1","str2"))

module.exports = isAnagram;
