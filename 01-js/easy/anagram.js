/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// To check if str1 and str 2 are rearrangements of each other
// if lengths are different they are not
// to compare the str elements first convert strings to array
// sort these arrays
// compare the 2 sorted arrays with a simple loop

function isAnagram(str1, str2) {

  // checking for length
  if (str1.length !== str2.length) {
    return false;
  }

  // converting strings to array
  const arr1 = str1.split('');
  const arr2 = str2.split('');

  // sort the arrays
  arr1.sort();
  arr2.sort();

  // compare the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else {
      return true;
    }
  }
}


module.exports = isAnagram;
