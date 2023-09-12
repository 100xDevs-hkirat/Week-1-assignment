/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function isAnagram(str1, str2) {
    var indexArray =  Array(128).fill(0)
    if(str1.length != str2.length)  return false
    for(var i=0;i<str1.length;i++){
        var charIndex1 = str1.charCodeAt(i)
        indexArray[charIndex1]++;
        var charIndex2 = str2.charCodeAt(i)
        indexArray[charIndex2]--;
    }
    for(var i=0;i<indexArray.length;i++){
        if(indexArray[i] != 0)  return false;
    }
    return true;
}
module.exports = isAnagram;
