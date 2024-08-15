/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var sortedStr1 = str1.split("").sort().join("");
  var sortedStr2 = str2.split("").sort().join("");

  console.log(sortedStr1);
  console.log(sortedStr2);

  if (sortedStr1 == sortedStr2){
    return true;
  } else {
    return false;
  }
}

var ans = isAnagram("iceman", "cinema");
console.log(ans);

