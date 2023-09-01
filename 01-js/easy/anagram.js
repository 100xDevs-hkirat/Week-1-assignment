/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
var arr1=str1.split("");
   var arr2=str2.split("");
   var n1= arr1.length;
   var n2=arr2.length;
   var arr3=[];
   if(n1===n2){
    for(var i=0;i<n1;i++){
        for(j=0;j<n2;j++){
            if(arr1[i]===arr2[j]){
                arr3.push(arr1[i]);
            }
        }
    }
    if(arr3.length===n1){
        return true;
    }
   }
   else{
    return false
   }
   return false;
}

module.exports = isAnagram;
