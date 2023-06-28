/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
/*we can apply sort() on alphabets not on the whole string, so for that we need to first split it and then join it*/

function sort(str) {

  var array = str.split("");
  array = array.sort();
  array = array.join("");
  return array;

}
function isAnagram(str1, str2) {
  str1 =  str1.toLowerCase();
  str2 =  str2.toLowerCase();
  if (sort(str1) == sort(str2)) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = isAnagram;
