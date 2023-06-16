/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// program 1st of Assigment

function isAnagram(str1, str2) {   
   let x = str1.split('').sort().join('');
   let y = str2.split('').sort().join('');
 
  /* first splitiing the element and making it an Array then sorting 
  it in alphawordical order and then joining it and making it an string and 
  at last equating it*/  
  
   if(x === y){
      console.log("True");
   } else { 
      console.log("False");
   }
}
// for false response
isAnagram("india","ndiani")
// for true response
isAnagram("yugal","uylga")
module.exports = isAnagram;
