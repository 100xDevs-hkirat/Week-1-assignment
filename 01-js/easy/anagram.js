/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  str1 = str1.toLowerCase();
  str2  = str2.toLowerCase();
  n = str1.length;
  let word1 = new Object();
  let word2 = new Object();

  for (let i = 0; i < n; i++){
    if (str1[i] in word1) word1[str1[i]]+=1;
    else word1[str1[i]] = 1;
    
    if (str2[i] in word2) word2[str2[i]]+=1;
    else word2[str2[i]] = 1;
  }

  if (word1.length != word2.length) return false;
  
  for (const char in word1){
    if (!(char in word2)) return false;
    if (word1[char] != word2[char]) return false;
  }
  return true;
}

module.exports = isAnagram;
