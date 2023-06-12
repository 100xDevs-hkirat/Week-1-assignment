/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(s,t) {
  let n=s.length;
  let m=t.length; 
  const sorted1 = s.split('').sort().join('')
  const sorted2 = t.split('').sort().join('')
  // console.log(sorted1,sorted2)
   if(sorted1 === sorted2) return true;
   else return false
}
console.log(isAnagram("race", "ecar"))
console.log(isAnagram("rat", "cat"))

module.exports = isAnagram;
