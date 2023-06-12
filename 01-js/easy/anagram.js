/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(/\s/g, "");
  str2 = str2.replace(/\s/g, "");

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();


  map1 = new Map()
  for (let i = 0; i < str1.length; i++) {
    if (map1.has(str1[i])) {
      map1.set(str1[i], map1.get(str1[i]) + 1)
    }
    else {
      map1.set(str1[i], 1)
    }
  }
  console.log(map1)
  for (let i = 0; i < str2.length; i++) {
    if (map1.has(str2[i])) {
      map1.set(str2[i], map1.get(str2[i]) - 1)
    }
    else {
      return false
    }
  }
  for (const [key, value] of map1) {
    if (value != 0) {
      return false
    }
  }
  return true

}

module.exports = isAnagram;
