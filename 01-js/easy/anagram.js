/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const map = new Map();
    for (let i = 0; i < str1.length; i++) {
        if (map.has(str1.charAt(i))) {
            map.set(str1.charAt(i), map.get(str1.charAt(i)) + 1);
        } else {
            map.set(str1.charAt(i), 1);
        }
    }
    for (let i = 0; i < str1.length; i++) {
        if (!map.has(str2.charAt(i))) {
            return false;
        }
        if (map.has(str2.charAt(i)) && map.get(str2.charAt(i)) == 1) {
            map.delete(str2.charAt(i));
        } else {
            map.set(str2.charAt(i), map.get(str2.charAt(i)) - 1);
        }
    }
    if (map.size == 0)
        return true;
    return false;
}

module.exports = isAnagram;
