/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let d = {};

  if (str1.length != str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if (!(str1[i] in d)) {
      d[str1[i]] = 0;
    }
    if (!(str2[i] in d)) {
      d[str2[i]] = 0;
    }
    d[str1[i]] += 1;
    d[str2[i]] -= 1;
  }

  for (let key in d) {
    if (d[key] != 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
