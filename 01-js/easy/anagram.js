/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (length.str1==length.str2) {
    
  }
  }
  
  module.exports = isAnagram;




function isAnagram(str1, str2) {
  // Check if the lengths of the strings are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert the strings to lowercase to ignore case sensitivity
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Create character frequency maps for both strings
  const charMap1 = {};
  const charMap2 = {};

  // Populate the character frequency maps
  for (let char of str1) {
    charMap1[char] = (charMap1[char] || 0) + 1;
  }

  for (let char of str2) {
    charMap2[char] = (charMap2[char] || 0) + 1;
  }

  // Compare the character frequency maps
  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
const result = isAnagram("paws", "swap");
console.log(result); // Output: true
