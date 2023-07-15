/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
var ans1 = str1.split(''); //we convert the string str1 to an object, so that we can apply the .sort() operation on it
  ans1.sort();
  ans1 = ans1.join(''); //we  now convert the ans1 of type object back to a string
  var ans2 = str2.split('');
  ans2.sort();
  ans2 = ans2.join('');
  if (ans1 == ans2)
  {
    return true;
  }
  else
  {
    return false;
  }
}

module.exports = isAnagram;
