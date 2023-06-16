/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// Assuming only "non-empty string" as an input
function isAnagram(str1, str2) {

  // The standard rule is to use all the letters from the original word only once
  if(str1.length !== str2.length) return false;

  // To avoid ambiguity between lower and capital letters.
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let a = str1.split('').sort().join('');
  let b = str2.split('').sort().join('');
   if(a === b)
      return true;
   else return false;

}

module.exports = isAnagram;
