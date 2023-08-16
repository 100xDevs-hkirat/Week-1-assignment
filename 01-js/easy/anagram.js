/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  let cond1 = false;
  let cond2 = false;

  cond1 = str1.toLowerCase().split('').every(element => {
    return str2.toLowerCase().includes(element);
  });

  cond2 = str2.toLowerCase().split('').every(element => {
    return str1.toLowerCase().includes(element);
  });

  return cond1 && cond2;
}

module.exports = isAnagram;