/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let str1_arr = str1.split('').sort();
  let str2_arr = str2.split('').sort();

  if(str1_arr.join() == str2_arr.join())
      console.log('Its an Anagram');
  else
      console.log('Its NOT an Anagram');
}

module.exports = isAnagram;

isAnagram('spar', 'rasp');


  