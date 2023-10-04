/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/


function isAnagram(string1, string2) {
  // Remove spaces and convert to lowercase to make the comparison case-insensitive
  const formattedString1 = string1.replace(/\s/g, '').toLowerCase();
  const formattedString2 = string2.replace(/\s/g, '').toLowerCase();

  if (formattedString1.length !== formattedString2.length) {
      return false;
  }

  const charCount1 = {};
  const charCount2 = {};

  // Populate the character frequency counters for both strings
  for (const char of formattedString1) {
      charCount1[char] = (charCount1[char] || 0) + 1;
  }
  for (const char of formattedString2) {
      charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Compare character frequency counters
  for (const char in charCount1) {
      if (charCount1[char] !== charCount2[char]) {
          return false;
      }
  }

  return true;
}

module.exports = isAnagram;