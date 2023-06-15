/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  if(len1 !== len2) {
    return false;
  }

  const map1 = new Map();
  const map2 = new Map();

  for(let i = 0; i < len1; i++) {
    const c = str1[i].toLowerCase();
    map1.set(c, map1.get(c) + 1 || 1);
  }
  for(let i = 0; i < len2; i++) {
    const c = str2[i].toLowerCase();
    map2.set(c, map2.get(c) + 1 || 1);
  }

  let ans = true;

  map1.forEach((value, key, map) => {
    if(map2.get(key.toLowerCase()) !== value) {
      ans = false;
    }
  })

  return ans;
}

module.exports = isAnagram;
