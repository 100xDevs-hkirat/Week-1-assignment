/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    let len1 = str1.length;
    let len2 = str1.length;
    if(len1 === len2){
      let newStr1 = str1.split('').sort().join('');
      let newStr2 = str2.split('').sort().join('');
      return newStr1 === newStr2;
    }
    else{
      return false;
    }
}


module.exports = isAnagram;
