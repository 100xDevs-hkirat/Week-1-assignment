/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/


function sort(str){
  var arraySorted = str.split("") //used to convert the string to array

  arraySorted = arraySorted.sort();
  var stringArray= arraySorted.join(" ") // used to convert array to string
  return stringArray;
}

function isAnagram(str1,str2){
if(sort(str1)==sort(str2))
{
  return true;
}
else{
  return false
}
}

var ans=isAnagram("iihi","iiih")

console.log(ans)

module.exports = isAnagram;
