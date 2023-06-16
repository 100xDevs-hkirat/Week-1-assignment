/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let word1 = str1.trim().replace(/\s+/g, "").toLowerCase().split('').sort().join('');
  let word2 = str2.trim().replace(/\s+/g, "").toLowerCase().split('').sort().join('');

  if (word1.length != word2.length) {
    return false;
  }
  else if (word1 === word2) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = isAnagram;