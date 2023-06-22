/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  // Remove all alphanumeric character and conver to lowercase

  const normalize = (str) => str.replace(/[^\w]/g, "").toLowerCase();

  const normalizeStr1 = normalize(str1)
  const normalizeStr2 = normalize(str2)

  if (normalizeStr1.length !== normalizeStr2.length) {
      return false
  }

  const sortedStr1 = normalizeStr1.split("").sort().join()
  const sortedStr2 = normalizeStr2.split("").sort().join()

  return sortedStr1 === sortedStr2

}

module.exports = isAnagram;

const ans = isAnagram("kri", "rimffk")
console.log(ans)