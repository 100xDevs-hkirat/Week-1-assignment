/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
   let k = str1.toLowerCase().split('').sort();
   let k1 = str2.toLowerCase().split('').sort();
   return (k.toString()===k1.toString());
}

module.exports = isAnagram;
