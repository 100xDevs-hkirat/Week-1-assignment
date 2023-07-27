/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let l1 = a.length;
    let l2 = b.length;

    if(l1 !== l2){
        console.log("INVALID INPUT");
        return
    }

    let string1 = a.split('').sort().join('');
    let string2 = b.split('').sort().join('');

    if(string1 === string2){
        console.log("The given strings are anagram");
    }
    else{
        console.log("GIven strings are not anagram");
    }
}

isAnagram("indian","naidni");
isAnagram("paper","raper");
isAnagram("length","width");


module.exports = isAnagram;
