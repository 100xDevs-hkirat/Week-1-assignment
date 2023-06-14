/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
 if(s.length!=t.length){
        return false;
    }
let s_array=s.split("");
   let t_array=t.split("");
   s_array.sort();
   t_array.sort();
        for(let index=0;index<s.length;index++){
        if(s_array[index]!=t_array[index]){
            return false;
        }
        }
        return true;
}

module.exports = isAnagram;
