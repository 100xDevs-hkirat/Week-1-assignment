/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var map = new Map();
  for (var chr of str1) {
    var c = chr.toLowerCase();
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);
  }
  for (var chr of str2) {
    var c = chr.toLowerCase();
    if (!map.has(c)) return false;
    map.set(c, map.get(c) - 1);
  }

  for (let value of map.values()) if (value != 0) return false;

  return true;
}

module.exports = isAnagram;
