/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let arr = str1.replace(/\s/g , '').toLowerCase().split("").sort().join("");
  let arr2 = str2.replace(/\s/g , '').toLowerCase().split("").sort().join("");
  
  if(arr.length !== arr2.length){
    return false
  }
  else{
    if(arr === arr2){
      return true
    }
    else{
      return false
    }
  }
  
  }

 isAnagram('Debit Card', 'Bad Credit')

  module.exports = isAnagram;
  