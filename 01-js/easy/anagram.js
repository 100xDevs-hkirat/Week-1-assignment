/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  // let hash = {}; // hashing won't work with special characters
  // therefor using map
  let hash = new Map();
  
  str1.toLowerCase().split('').forEach(element => {
      hash[element]?hash[element]++:hash[element]=1;
      if (hash.has(element)) {
        hash.set(element, hash.get(element)+1);
      } else {
        hash.set(element, 1);
      }
  });

  for (let element of str2.toLowerCase()) {
      if (!hash.has(element) || hash.get(element) < 1) return false;
      else hash.set(element, hash.get(element)-1);
  };

  return true;
}

console.log(isAnagram('Debit Card', 'Bad Credit'))

module.exports = isAnagram;