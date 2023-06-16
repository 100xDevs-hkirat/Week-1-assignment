/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 !== len2) {
    return false; // If the lengths are different, they can't be anagrams
  }

  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("varsha", "ashrav")); 

module.exports = isAnagram;
