/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    var a=0,b=0;
    if (str1.length == str2.length){
        for (var j=0; j<str1.length; j++){
            a += str1.charCodeAt(j);
            b += str2.charCodeAt(j);
        }
        if (a==b) console.log("Yes");
    }
    else console.log("No");
}

module.exports = isAnagram;
