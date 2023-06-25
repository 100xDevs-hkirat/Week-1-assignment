/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const length = 256;
  const initialValue = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if(str1.length!=str2.length){
    return false;
  }
  var arr = Array(length).fill(initialValue);
  for(var i=0;i<str1.length;i++){
    arr[str1[i].charCodeAt(0)-'a'.charCodeAt(0)]++;
    arr[str2[i].charCodeAt(0)-'a'.charCodeAt(0)]--;
  }
  for(const i of arr){
    if(i!=0){
      return false;
    }
  }
  return true;
}
console.log(isAnagram("hellO","hello"));
module.exports = isAnagram;
