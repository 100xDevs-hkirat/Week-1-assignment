/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Check if the cleaned strings have the same length
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Count the frequency of each character in str1
  const charCount = {};
  for (let char of cleanStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check if the characters in str2 match the frequencies in charCount
  for (let char of cleanStr2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

module.exports = isAnagram;
