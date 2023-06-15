/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  //sort the given strings 
  sortedstr1 = str1.split('').sort().join('');
  sortedstr2 = str2.split('').sort().join('');

  //check if the strings are equal 
  return sortedstr1 === sortedstr2;
}

module.exports = isAnagram;
