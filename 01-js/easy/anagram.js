/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var hashedStr1 = generateHash(str1);
  var hashedStr2 = generateHash(str2);
  if(hashedStr1 === hashedStr2){
    return true;
  }
  return false;
}

function generateHash(str){
  const array = new Array(26).fill(0);
  for(var i=0; i<str.length; i++){
    array[str[i].charCodeAt(0)-'a'.charCodeAt(0)] += 1;
  }
  //console.log(array);
  return array.join("#");
}

console.log(isAnagram("card", "racd"));
