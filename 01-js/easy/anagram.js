/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false
  }
  let str1Array = str1.toLowerCase()
  let str2Array = str2.toLowerCase()

  str1Array = str1Array.split('').sort().join('')
  str2Array = str2Array.split('').sort().join('')

  //   for (let i = 0; i < str1.length; i++) {
  //     if (str2Array.includes(str1Array[i])) {
  //       continue
  //     } else {
  //       return false
  //     }
  //   }
  //   return true
  // }

  return str1Array === str2Array
}
module.exports = isAnagram
