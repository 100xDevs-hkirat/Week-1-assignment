/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  var count = [];
  s1 = str1.toLowerCase();
  s2 = str2.toLowerCase();
  for (var i = 0; i < 26; i++) {
    count[i] = 0;
  }
  for (var i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i) - 97]++;
  }

  for (var i = 0; i < s2.length; i++) {
    count[s2.charCodeAt(i) - 97]--;
  }

  for (var i = 0; i < 26; i++) {
    if (count[i] != 0) return false;
  }
  return true;
}

console.log(isAnagram("openai", "aiopen"));
module.exports = isAnagram;
