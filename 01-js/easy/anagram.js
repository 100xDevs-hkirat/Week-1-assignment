/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {  
  // Your code here
  if (str1.length !== str2.length) {
    return false;
  }

  else {
    const str1Sorted = str1.split('').sort().join('');
    const str2Sorted = str2.split('').sort().join('');
    return str1Sorted === str2Sorted;
  }


}


module.exports = isAnagram;



