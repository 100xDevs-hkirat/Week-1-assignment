/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let hash = {};
  
  str1.split('').forEach(element => {
      hash[element]?hash[element]++:hash[element]=1;
  });

  for (let element of str2) {
      if (!hash[element] || hash[element]-- < 1) return false;
  };

  return true;
}

module.exports = isAnagram;