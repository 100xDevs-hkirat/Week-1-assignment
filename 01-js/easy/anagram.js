/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function sort(str){
// let n=str.length;
// let temp="";
// for(let i=0;i<n;i++){
//   for(let j=i+1;j<n;j++){
//     if(str[i]>str[j]){
//       temp=str[i];
//       str[i]=str[j];
//       str[j]=temp;
//     }
//   }
// }
// return str;
 str=str.split("").sort().join("");
return str;

}

function isAnagram(str1, str2) {
  if(str1.length!==str2.length)return false;
if(sort(str1)===sort(str2))return true;
else return false;
}

// module.exports = isAnagram;
var ans=isAnagram('aspr','rspa');
console.log(ans);
