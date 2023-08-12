/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1,str2){
  var sstr1 = str1.split('').sort().join('');
  var sstr2 = str2.split('').sort().join('');
  if(sstr1.length != sstr2.length){
    return false;
  }
  for(var i = 0 ; i<sstr1.length;i++){
    if(sstr1[i] !=sstr2[i]){
      return false;
    }
  }
  return true;
}

if(isAnagram('prana', 'naaprv')){
  console.log('it is an anagram');
}

else{
  console.log('not an anagram');
}

module.exports = isAnagram;
