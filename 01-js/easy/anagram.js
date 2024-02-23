/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function isAnagram(str1, str2) {
  const sortedStr1 = str1.toLowerCase().replace(/\s/g, '').split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().replace(/\s/g, '').split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

const string1 = "listen";
const string2 = "silent";
if (isAnagram(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams.`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}

module.exports = isAnagram;
