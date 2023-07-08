/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/



function isAnagram(str1, str2) {
  let a=str1.split("");
  let b=str2.split("");
  a.sort();
  b.sort();
  let c=a.join("");
  let d=b.join("");
  
   if(c===d){
     console.log(true);
   }else{
     console.log(false);
   }
}
isAnagram("bat","tab");

module.exports = isAnagram;
