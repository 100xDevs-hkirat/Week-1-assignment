/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let object_For_Char= {};

  if (str1.length!=str2.length)
    return (false);

  for (char of str1)
    object_For_Char[char]=(object_For_Char[char]||0)+1;

  
  for (char of str2)
  
    if(!object_For_Char[char])

      return (false);

    object_For_Char[char]--;

  return true;

}

module.exports = isAnagram;
