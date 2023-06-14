/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  //hello   loleh
  if(str1.length!=str2.length) return false;
  str1=str1.toLowerCase().split('').join('');
  const str1Array=str1.split('');
  const str2Array=str2.split('');
  let flag=true;
  for(let i=0;i<str1Array.length;i++)
  {
    for(let j=0;j<str2Array.length;j++){
      if(str1Array[i]===str2Array[j]){
        str2Array[j]='';
        str1Array[i]='';
        flag=false;
        break;
      }
      
    }
    if(flag)  return false;
    flag=true;
  }
  return true;        
}



module.exports = isAnagram;
