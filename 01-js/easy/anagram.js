/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

var f1 = str1.split("");
var f2 = str2.split("");

f1.sort();
f2.sort();

  if(f1.length != f2.length)
    return false;
for(let i=0;i<f1.length;i++)
  {
    if(f1[i]!=f2[i])
      return false;
  }
  return true;
}

module.exports = isAnagram;
