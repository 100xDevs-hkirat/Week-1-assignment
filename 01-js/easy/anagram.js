/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var t1 = str1.toLowerCase().split('').sort();
  var t2 = str2.toLowerCase().split('').sort();

  var isAna = false;

  if (t1.length === t2.length){
    for(var i=0; i<t1.length; i++)
    {
      if(t1[i] === t2[i])
        isAna=true;
      else{
        isAna=false;
        break;
      }
    }
  }
  else
  {
    isAna = false;
  }

/*  console.log('Is Anagram : ', isAna);
  console.log(t1);
  console.log(t2);
*/
  return isAna;
}

//isAnagram("abCCde","aCbDCe");

module.exports = isAnagram;
