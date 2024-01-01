/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function sortString(str){
  const upperCased = str.toUpperCase();
  const arrString = upperCased.split('');
  const sortedArray = arrString.sort();
  const ans = sortedArray.join('');

  return ans;
}
function isAnagram(str1, str2) {
  if(sortString(str1)==sortString(str2)){
    return true;
  }
  return false;
}
// console.log(sortString('Debit Card'));
// console.log(sortString('Bad Credit'));
module.exports = isAnagram;
