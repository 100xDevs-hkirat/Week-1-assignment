/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return 0;
  }
  const map1 = new Map();
  const map2 = new Map();
  for (var index = 0; index < str1.length; index++) {
    if (!map1.has(str1[index]))
      map1.set(str1[index], 1)
    else {
      var freq = map1.get(str1[index])
      map1.set(str1[index], freq + 1);
    }
  }
  for (var index = 0; index < str2.length; index++) {
    if (!map2.has(str2[index]))
      map2.set(str2[index], 1)
    else {
      var freq = map2.get(str2[index])
      map2.set(str2[index], freq + 1);
    }
  }
  if (map1.size != map2.size) {
    return 0;
  } else {
    for (const key of map1.keys()) {
      if (map1.get(key) !== map2.get(key)) {
        return 0;
      }
    }

    return 1;
  }

}

module.exports = isAnagram;
