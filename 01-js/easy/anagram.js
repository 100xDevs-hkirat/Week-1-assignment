/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var strm1 = str1.trim();
  var strm2 = str2.trim();

  if (strm1.length !== strm2.length) {
    return false;
  }
  
  if (strm1.toUpperCase().split('').sort().join('') !== strm2.toUpperCase().split('').sort().join('')) {
    return false;
  } else {
    return true;
  }
}


module.exports = isAnagram;
