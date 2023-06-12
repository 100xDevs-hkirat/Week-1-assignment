/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1=str1.toUpperCase();
  str2=str2.toUpperCase();
  
  var arr1 = str1.slice("");
  var arr2 = str2.slice("");
  const freq1= new Array(500).fill(0);
  const freq2= new Array(500).fill(0);
  if (str1.length === str2.length) {
    for (let i = 0; i < arr1.length; i++) {
      const asci1= arr1[i].charCodeAt(0);
      freq1[asci1]++;
      const asci2= arr2[i].charCodeAt(0);
      freq2[asci2]++;
    }
    var flag=0;
    for (let i = 0; i < freq1.length; i++) {
      if (freq1[i]!==freq2[i]) {
        return false;
      };  
    }
    return true;
  } else {
     return false;
  }
}

module.exports = isAnagram;
