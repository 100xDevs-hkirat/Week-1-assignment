/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    var count=0;
    if (str1.length ===str2.length) {
        for (var i=0;i<str1.length;i++) {
            for (var j=0;j<str2.length;j++) {
                if (str1.charAt(i)===str2.charAt(j)) {
                    count++;
                }
            }
        }
        if (count===str1.length){
            return "isAnagram"
        }
        else {
            return "Not an anagram"
        }
    }
    else {
        return "Not an Anagram"
    }

}

module.exports = isAnagram;
