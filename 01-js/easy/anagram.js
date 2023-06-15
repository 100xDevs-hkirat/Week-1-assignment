/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  str1 = str1.toLowerCase().trim().replace(" ", "");
  str2 = str2.toLowerCase().trim().replace(" ", "");

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]] !== undefined) {
      obj1[str1[i]] += 1;
    } else {
      obj1[str1[i]] = 1;
    }

    if (obj2[str2[i]] !== undefined) {
      obj2[str2[i]] += 1;
    } else {
      obj2[str2[i]] = 1;
    }
  }

  let sorted_obj1 = Object.keys(obj1)
    .sort()
    .reduce((temp_obj, key) => {
      temp_obj[key] = obj1[key];
      return temp_obj;
    }, {});

  let sorted_obj2 = Object.keys(obj2)
    .sort()
    .reduce((temp_obj, key) => {
      temp_obj[key] = obj2[key];
      return temp_obj;
    }, {});

  if (JSON.stringify(sorted_obj1) === JSON.stringify(sorted_obj2)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
