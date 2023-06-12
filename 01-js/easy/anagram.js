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
  let string_length = str1.length;
  let str1_dict = {};
  let str2_dict = {};
  for (let i = 0; i < string_length; i++) {
    if (str1[i].toLowerCase() in str1_dict) {
      str1_dict[str1[i].toLowerCase()] += 1;
    } else {
      str1_dict[str1[i].toLowerCase()] = 1;
    }

    if (str2[i].toLowerCase() in str2_dict) {
      str2_dict[str2[i].toLowerCase()] += 1;
    } else {
      str2_dict[str2[i].toLowerCase()] = 1;
    }
  }

  for (const key in str1_dict) {
    if (key in str2_dict) {
      if (str1_dict[key] === str2_dict[key]) {
        continue;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
