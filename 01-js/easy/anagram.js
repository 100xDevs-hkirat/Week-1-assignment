/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var string1=str1.toUppercase();
  var string2=str2.toUppercase();
if(string1.sort()==string2.sort()){
  return true;}
  else{
    return false;
  }
}
var answer=isAnagram("Amit","mAIt");
console.log(answer);

module.exports = isAnagram;
