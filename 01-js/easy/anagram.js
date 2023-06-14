/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    let map = {}
    if(str1.length !== str2.length) return false
    str1=str1.toLowerCase() 
    str2=str2.toLowerCase() 
    for(let char of str1){
      if(map[char]){
        map[char] ++
      } else {
        map[char] = 1
      }
    }
    console.log(map)
    for(let char of str2){
      if(!map[char]){
        return false
      } else {
        map[char]--
      }
    }
    return true
    
}
console.log(isAnagram('Debit Card','Bad Credit'))
module.exports = isAnagram;
