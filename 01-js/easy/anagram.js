/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const word1 = str1.toLowerCase().trim().replace(" ", "");
  const word2 = str2.toLowerCase().trim().replace(" ", "");
  if (word1.length !== word2.length) {
    return false;
  }
  let isWordsAnagram = true;
  for (let i = 0; i < word1.trim().length; i++) {
    const charInWord = word1[i];
    const charCount1 = word1.split(charInWord).length - 1;
    const CharCount2 = word2.split(charInWord).length - 1;
    if (charCount1 !== CharCount2) {
      isWordsAnagram = false;
      return;
    }
  }
  return isWordsAnagram;
}

console.log(isAnagram("debit card", "bad credit"));

module.exports = isAnagram;
