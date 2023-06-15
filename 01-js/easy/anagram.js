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

  const strMap1 = {};
  const strMap2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (strMap1[str1[i]]) strMap1[str1[i]] += 1;
    else strMap1[str1[i]] = 1;
    if (strMap2[str2[i]]) strMap2[str2[i]] += 1;
    else strMap2[str2[i]] = 1;
  }

  for (let key in strMap1) {
    if (strMap1[key] != strMap2[key]) return false;
  }

  return true;
}

module.exports = isAnagram;
