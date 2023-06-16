/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const charCount = new Map()
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  const n1 = str1.length, n2 = str2.length

  for(let i=0;i<n1;i++) {
    const c = str1[i]
    if(! /\s/.test(c)) {
      const prevCount = charCount.get(c)
      charCount.set(c, (prevCount || 0) + 1)
    }
  }

  for(let i=0;i<n2;i++) {
    const c = str2[i]
    if(! /\s/.test(c)) {
      if(charCount.has(c)) {
        const prevCount = charCount.get(c)
        if(prevCount === 0) {
          return false
        }
        charCount.set(c, prevCount - 1)
      }
      else {
        return false
      }
    }
  }

  for(let count of charCount.values()) {
    if(count !== 0) {
      return false
    }
  }
  return true
} 

module.exports = isAnagram;
