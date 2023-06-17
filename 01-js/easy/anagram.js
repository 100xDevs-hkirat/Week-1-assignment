/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  function createFrequencyMap(str) {
    map = {};
    for (const i of str) {
      if (map[i]) {
        map[i]++;
      } else {
        map[i] = 1;
      }
    }
    return map;
  }

  const strMap1 = createFrequencyMap(str1.toLowerCase());
  const strMap2 = createFrequencyMap(str2.toLowerCase());

  for (const i in strMap1) {
    if (strMap1[i] !== strMap2[i]) return false;
  }
  return true;
}

module.exports = isAnagram;
