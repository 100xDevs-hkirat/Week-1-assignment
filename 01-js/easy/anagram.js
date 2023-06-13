/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2){
  if(str1.length == str2.length){
      if(str1.toLowerCase().sort == str2.toLowerCase().sort){
          return true;
      }
      else{
          return false;
      }
  }
  else{
      return false;
  }
}

module.exports = isAnagram;
