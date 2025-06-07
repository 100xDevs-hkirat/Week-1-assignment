/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

exports.isAnagram = (str1, str2) => {
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  arr1.sort();
  arr2.sort();

  const res1 = arr1.join("");
  const res2 = arr2.join("");

  return res1 === res2;
};

// module.exports = isAnagram;
