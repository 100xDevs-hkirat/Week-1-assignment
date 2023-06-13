/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  function sorti(Stringg) {
    return Stringg.split("").sort().join("");
  }
  let a = sorti(str1);
  let b = sorti(str2);

  for (let i = 0; i <= str1.length; i++) {
    if (a.charAt(i) !== b.charAt(i)) {
      return false;
    }
  }
  return true;
}




module.exports = isAnagram;
