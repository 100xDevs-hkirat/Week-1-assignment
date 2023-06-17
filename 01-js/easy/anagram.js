/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const str1Chars = str1.toLowerCase().split("").sort();
  const str2Chars = str2.toLowerCase().split("").sort();

  const str1Len = str1.length;
  const str2Len = str2.length;

  if (str1Len !== str2Len) return false;

  for (let i = 0; i < str1Len; i++) {
    if (str1Chars[i] !== str2Chars[i]) return false;
  }

  return true;
}

module.exports = isAnagram;
