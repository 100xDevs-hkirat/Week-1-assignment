/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sortthestring(str)
{
  var array = str.split("");
  array = array.sort();
  var ans = array.join("");
  return ans;
}

function isAnagram(str1, str2) {
  if(sortthestring(str1) == sortthestring(str2))
  {
    console.log("this is anagram");
  }
  else 
  {
    console.log("not a anagram");
  }


module.exports = isAnagram;
