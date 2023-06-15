/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length ===  str2.length){
    l = str1.length;
    for(var i =0;i<l;i++){
      if(str1[i]===str2[l-1-i]){
        continue;
      }
      else{
        return false;
      }
    }
  }
  else{
    return false;
  }
  
  return true;

}


module.exports = isAnagram;
