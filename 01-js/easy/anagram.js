/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  //if length of strings are not equal then return false.
  if(str1.length!=str2.length)
    return false;


  //create two arrays
  var a = new Array(256);
 
  var b = new Array(256);
 
  //initialize with 0
  for(let i=0;i<a.length;i++){
    a[i]=0;
    b[i]=0;   
  }


  //for str1 , store the count of characters in arr1
  for(let i=0;i<str1.length;i++){
 
    let j = str1[i].charCodeAt(0);//returns ascii value
    a[j]++; 
  }


  //for str1 , store the count of characters in arr12
  for(let i=0;i<str2.length;i++){
 
    let j = str2[i].charCodeAt(0);
    b[j]++;
     
  }
   
  //compare both the arrays , if not equal return false
  for(let i=0;i<a.length;i++){
    if(a[i]!=b[i])
     return false;
  }
  return true;
 
}

module.exports = isAnagram;
