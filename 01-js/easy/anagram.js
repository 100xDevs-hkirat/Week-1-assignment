/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
  let count =0;
  let arr2 = str2.split('');

  for(let i=0;i<str1.length;i++){
    for(let k=0;k<arr2.length;k++){
      if(str1.charAt(i) == arr2[k]){
        count++;
        arr2[k] = '-1';
        break;
      }
    }
  }

  if(count == str1.length){
    return true;
  }
  else{
    return false;
  }
}

console.log(isAnagram('somethink','thinksome'));

module.exports = isAnagram;
