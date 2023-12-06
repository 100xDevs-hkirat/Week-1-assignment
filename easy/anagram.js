/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  
   
    const cleanedStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanedStr2 = str2.replace(/\s/g, '').toLowerCase();
  
   
    if (cleanedStr1.length !== cleanedStr2.length) {
      return false;
    }
  
    // Sort the characters and compare the sorted strings
    const sortedStr1 = cleanedStr1.split('').sort().join('');
    const sortedStr2 = cleanedStr2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  

}

module.exports = isAnagram;
