/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
 
    var aaa=str1.split('').sort().join('')
    var bbb=str2.split('').sort().join('')

    if(aaa==bbb){
        return 0
    }
    else{
        return 1
    }


}

module.exports = isAnagram;
