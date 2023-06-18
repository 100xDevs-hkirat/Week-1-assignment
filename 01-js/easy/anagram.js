/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
 str1 = str1.toLowerCase().replace(/ /g, '');
  str2 = str2.toLowerCase().replace(/ /g, '');
  if (str1.length !== str2.length) {
    return false;
  }

  const freq1 = {};
  const freq2 = {};
  for (let char of str1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }
  for (let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }
  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true; 
}

module.exports = isAnagram;
