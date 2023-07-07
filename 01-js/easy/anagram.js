/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

/* a very complex function to solve a simple problem */
function isAnagram(str1, str2) {
  const str1Arr = str1.split("");
  const str2Arr = str2.split("");
  let index = null;
  let found = false;
  const result =
    str1Arr.length === str2Arr.length
      ? str1Arr.reduce(function (acc, item) {
          return (
            acc &&
            ((index = str2Arr.findIndex((ele) => ele === item)),
            (found = index !== -1 ? true : false),
            found ? (str2Arr[index] = null) : false,
            found)
          );
        }, true)
      : false;
  return result;
}

module.exports = isAnagram;
