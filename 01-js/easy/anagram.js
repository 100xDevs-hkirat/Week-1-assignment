/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  // check the length of the strings
  if (str1.length != str2.length) {
    return false;
  }

  let counter = {};
  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }

  for (let items of str2) {
    if (!counter[items]) {
      return false;
    }
    counter[items]-=1;
  }
  return true;
}

module.exports = isAnagram;
