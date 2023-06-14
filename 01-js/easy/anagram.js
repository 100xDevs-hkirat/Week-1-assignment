/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let hash1 = [],
    hash2 = [];
  for (let i = 0; i <= 500; i++) {
    hash1[i] = 0;
    hash2[i] = 0;
  }
  for (let i = 0; i < str1.length; i++) {
    hash1[str1.charCodeAt(i) - 0]++;
    hash2[str2.charCodeAt(i) - 0]++;
  }
  for (let i = 0; i <= 500; i++) {
    if (hash1[i] != hash2[i]) {
      return false;
    }
  }
  return true;
}
module.exports = isAnagram;
