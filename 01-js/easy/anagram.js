/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(" ", "").toLowerCase();
  str2 = str2.replace(" ", "").toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  const charCount1 = {};
  const charCount2 = {};

  for (const char of str1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  for (const char of str2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  for (const char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
