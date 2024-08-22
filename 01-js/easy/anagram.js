/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const cleanStr1 = str1.replace(/[^\w]/g, "");
  const cleanStr2 = str2.replace(/[^\w]/g, "");
  if (
    cleanStr1.split("").sort().join("") === cleanStr2.split("").sort().join("")
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isAnagram("listen", "silent");
module.exports = isAnagram;
