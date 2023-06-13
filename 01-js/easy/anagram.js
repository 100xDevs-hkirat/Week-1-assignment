/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var str1Alphabets = new Map();

  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i].toLowerCase();

    if(str1Alphabets.has(ch)) {
      str1Alphabets.set(ch, str1Alphabets.get(ch) + 1);
    } else {
      str1Alphabets.set(ch, 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i].toLowerCase();

    if(!str1Alphabets.has(ch))
      return false;
    else if(str1Alphabets.has(ch) && str1Alphabets.get(ch) > 0) {
      str1Alphabets.set(ch, str1Alphabets.get(ch) - 1);
    }
  }

  for (let diff of str1Alphabets.values()) {
    if(diff > 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
