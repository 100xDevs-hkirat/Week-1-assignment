/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1 == '' && str2 == '') { return true }
  let str1Arr = str1.split("").map(str => str.trim().toLowerCase()).filter(str => {
    return str.length > 0
  })
  let str2Arr = str2.split("").map(str => str.trim().toLowerCase()).filter(str => {
    return str.length > 0
  })
  // console.log(str1Arr, str2Arr)

  if (str1Arr.length === str2Arr.length) {
    return !str1Arr.some(str => str2Arr.indexOf(str) == -1)
  } else return false

}
console.log(isAnagram("jhj    hjh      ", "   jhjhjh"))

module.exports = isAnagram;
