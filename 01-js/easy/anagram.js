/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function sortarr(str){
  var array = str.split("")
  array = array.sort();
  var sortedarray = array.join("")
  return sortedarray
}
function isAnagram(str1, str2) {
  if (sortarr(str1) == sortedarr(str2)){
    return true;
  }else{
    return false;
  }

}

var ans = isAnagram("pavan","napav");
console.log(ans);

module.exports = isAnagram;
