/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(s,t) {

  s = s.replace(/\s/g, "").toLowerCase();
  t = t.replace(/\s/g, "").toLowerCase();

  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
}
console.log(isAnagram("race","ecar"))
module.exports = isAnagram;
