/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    // Length of anagrams should be same.
    if (str1.length !== str2.length) {
        return false;
    }

    // Split the string chars into array and sort alphabetically and join back to string
    // "sai" -> ['a','i','s'] -> 'ais'
    const charArr1 = str1.toLowerCase().split('').sort().join('');
    const charArr2 = str2.toLowerCase().split('').sort().join('');
    return charArr1 === charArr2;
}

module.exports = isAnagram;
