/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (str1.length !== str2.length) {
        return false;
    }
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log("Test case: spar vs rasp - ", isAnagram("spar", "rasp") ? "true" : "false");
console.log("Test case: hello vs world - ", isAnagram("hello", "world") ? "true" : "false");
console.log("Test case: Debit Card vs Bad Credit - ", isAnagram("Debit Card", "Bad Credit") ? "true" : "false");
console.log("Test case: Astronomer vs Moon starer - ", isAnagram("Astronomer", "Moon starer") ? "true" : "false");



module.exports = isAnagram;
