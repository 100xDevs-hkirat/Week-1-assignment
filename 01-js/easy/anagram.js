/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1 === str2) return true;
  if (!str1 || !str2) return false;

  const l1 = str1.length,
    l2 = str2.length;

  if (l1 !== l2) return false;

  let freqMap = {};
  for (let i = 0; i < l1; i++) {
    let ch = str1.charAt(i);
    if (ch in freqMap) freqMap[ch]++;
    else freqMap[ch] = 1;

    let ch2 = str2.charAt(i);
    if (ch2 in freqMap) freqMap[ch2]--;
    else freqMap[ch2] = -1;
  }

  let values = Object.values(freqMap);
  let arr = values.filter((x) => x != 0);

  if (arr.length > 0) return false;
  return true;
}

module.exports = isAnagram;
