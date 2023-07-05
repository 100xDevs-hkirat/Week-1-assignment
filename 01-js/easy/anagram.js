/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if ( str1.length != str2.length)return false;


const m1 = {};
const m2 = {};
for (let i of str1){
  if ( m1[i])m1[i]++;
  else m1[i]=1;
}
for (let i of str2){
  if ( m2[i])m2[i]++;
  else m2[i]=1;
}
for ( let i in m1){
  if ( m1[i] != m2[i]){
    return false;
  }
}
return true;

}

module.exports = isAnagram;
