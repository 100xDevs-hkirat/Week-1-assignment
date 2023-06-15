/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2.str2.toLowerCase();
  let match = false;
  for (let i = 0; i < str1.length; i++) {
    match = false;
    for (let j = 0; j < str2.length; j++) {
      if (str1.charAt(i) == str2.charAt(j)) {
        match = true;
        break;
      }
    }
  }
  if (match) {
    return true;
  } else {
    return false;
  }
}

console.log("Is anagram :" + isAnagram("spar", "rasp"));
module.exports = isAnagram;
