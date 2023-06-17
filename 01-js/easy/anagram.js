/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1?.length !== str2?.length) {
    return false;
  }

  const str1Obj = {};
  for (let char of str1) {
    const lowerChar = char.toLowerCase();
    let charCount = str1Obj[lowerChar] || 0;
    str1Obj[lowerChar] = ++charCount;
  }

  const str2Obj = {};
  for (let char of str2) {
    const lowerChar = char.toLowerCase();
    let charCount = str2Obj[lowerChar] || 0;
    str2Obj[lowerChar] = ++charCount;
  }

  for (let key in str1Obj) {
    if (str1Obj.hasOwnProperty(key) && str1Obj[key] !== str2Obj[key]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
