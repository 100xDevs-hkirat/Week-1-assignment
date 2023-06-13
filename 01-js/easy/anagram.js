/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
r code by running
  - `npm run test-anagram`
  Once you've implemented the logic, test you
*/

function isAnagram(str1, str2) {

  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  if(str1 == str2)
  return true;
  else return false;
}

console.log(isAnagram("car","rat"));
//module.exports = isAnagram;
