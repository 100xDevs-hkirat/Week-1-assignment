/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    let mp1 = {} , mp2 = {} ;
    for(let char in str1){
      if(mp1[char]) mp1[char] += 1 ;
      else  mp1[char] = 1 ;
    }
    for(let char in str2){
      if(mp2[char]) mp2[char] += 1 ;
      else  mp2[char] = 1 ;
    }
    const isEqual = JSON.stringify(mp1) === JSON.stringify(mp2);
    return isEqual ;

}

module.exports = isAnagram;
