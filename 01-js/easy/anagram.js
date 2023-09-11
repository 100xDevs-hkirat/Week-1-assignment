/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    const string1 = {};
    const string2 = {};
    if (str1.length !== str2.length) {
        return false
    }
    for (let char1 of str1){
        string1[char1] = string1[char1] !== undefined ? string1[char1] + 1 : 1
    }
    for (let char2 of str2){
        string2[char2] = string2[char2] !== undefined ? string2[char2] + 1 : 1
    }
    for (let char in string1) {
        if (string1[char] !== string2[char]){
            return false;
        }
    }
    return true
}

module.exports = isAnagram;
