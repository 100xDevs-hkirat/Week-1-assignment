/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // Convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Remove whitespace from both strings
  str1 = str1.replace(/\s/g, '');
  str2 = str2.replace(/\s/g, '');

  // Check if the lengths of the strings are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert strings to arrays and sort them alphabetically
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  if (sortedStr1 === sortedStr2) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
const string1 = 'listen';
const string2 = 'silent';

if (isAnagram(string1, string2)) {
  console.log('The strings are anagrams.');
} else {
  console.log('The strings are not anagrams.');
}


module.exports = isAnagram;
