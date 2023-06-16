/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
// compare type of provided arguments
if (typeof str1 !== "string" || typeof str2 !== "string") return false;
// compare length of both the input strings
if (str1.length !== str2.length) return false;
// create two empty objects
let temp_dict_str1 = {},
  temp_dict_str2 = {};
// convert both string in simillar case
str1 = str1.toLowerCase(), str2 = str2.toLowerCase();  
// assign characters of each string in objects with occurance
for (let counter = 0; counter < str1.length; counter++) {
  temp_dict_str1[str1[counter]] = (temp_dict_str1[str1[counter]] || 0) + 1;
  temp_dict_str2[str2[counter]] = (temp_dict_str2[str2[counter]] || 0) + 1;
}
// compare both the objects
  for (const [key, value] of Object.entries(temp_dict_str1)) {
    if (temp_dict_str2[key] !== value) return false;
  }
return true;
}

module.exports = isAnagram;
