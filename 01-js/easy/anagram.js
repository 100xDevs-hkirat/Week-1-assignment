/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  str1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase()
  str2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase()

  if(str1.length !== str2.length){
    return false;
  }

  const sortingStr1 = str1.split("").sort().join("");
  const sortingStr2 = str2.split("").sort().join("");

  return sortingStr1 === sortingStr2
    
}


console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
console.log(isAnagram("astronomer", "moonstarer"));// Output: true
