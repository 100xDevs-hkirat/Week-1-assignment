/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
let sortedString1 = sortedString(str1);
let sortedString2 =  sortedString(str2);
if (sortedString1 === sortedString2)
  return true;
else return false;
}

function sortedString(str){
  let sortedString ="";
  var chars = str.toUpperCase().split('')
  sortedString = chars.sort().toString()
//  for(var i=0;i<str.length,i++){
  console.log(sortedString)
  return sortedString;
  }

//console.log(isAnagram("Rishi","RishiS"))
console.log(isAnagram('School MASTER', 'The ClassROOM'))
module.exports = isAnagram;

