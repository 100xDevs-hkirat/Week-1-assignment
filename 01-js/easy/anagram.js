/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let map1 = new Map();
  let map2 = new Map();
  for (i of str1) {
    map1[i] = (map1.get(i)) ? map1[i] + 1 : 1;
  }
  for (i of str2) {
    map2[i] = (map2.get(i)) ? map2[i] + 1 : 1;
  }
  for (i of Object.keys(map1)) {
    if (!(map1[i] == map2[i])) { return false; }
  }
  if (str1 === "") { return str2 === ""; }
  return true;
}

module.exports = isAnagram;
