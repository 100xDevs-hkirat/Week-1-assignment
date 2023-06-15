/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  var output = true;

  // convert all charectors to lower case
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length == str2.length){
    // convert str to char array and sort the resultant array
    char1 = str1.split('').sort();
    char2 = str2.split('').sort();

    // check if all the characters within the two strings matches 
    for (x in char1){
      if (char1[x] != char2[x]){
        output = false;
        break;
      }
    }
  }
  else{
    output = false;
  }

  return output;
}

module.exports = isAnagram;
