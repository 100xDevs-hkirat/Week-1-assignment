/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length) 
    return false;
  const map1 = new Map();
  const map2 = new Map();
  for(let i = 0; i < str1.length; i++) {
    if(map1.has(str1[i])) {
      map1.set(str1[i], map1.get(str1[i]) + 1);
    } else {
      map1.set(str1[i], 1);
    }
  }
  for(let i = 0; i < str2.length; i++) {
    if(map2.has(str2[i])) {
      map2.set(str2[i], map2.get(str2[i]) + 1);
    } else {
      map2.set(str2[i], 1);
    }
  }
  if(map1.size != map2.size) return false;
  for(let [key, val] of map1) {
    if(!map2.has(key) || map2.get(key) != val) return false;
  }
  return true;
}

console.log(isAnagram('spar', 'rasp'));
console.log(isAnagram('abc', 'cba'));
console.log(isAnagram('abc', 'def'));

module.exports = isAnagram;
