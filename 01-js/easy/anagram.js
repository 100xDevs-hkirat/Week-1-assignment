/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function sorting1(str1,str2){
  return str1.split('').sort().join('');
  return str2.split('').sort().join('');
}

function isAnagram(str1,str2){
    if(sorting1(str1)==sorting1(str2)){
        return true;
    }
    else{
        return false;
    }
  
}

var ans = isAnagram("lion","inl");
console.log(ans);

module.exports = isAnagram;
