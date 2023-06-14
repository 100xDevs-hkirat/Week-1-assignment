/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/


function isAnagram(str1, str2) {
  if(str1.length==str2.length)
  {
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
  let s=[];
  let f=[];
 for(let i=0;i<str1.length;i++)
 {
  if(str1.charAt(i)!="")
s.push(str1.charAt(i));
 }
 for(let j=0;j<str2.length;j++)
 {
  if(str2.charAt(j)!="")
f.push(str2.charAt(j))
 }
 s=s.sort();
 f=f.sort();
 let c=0;
 for(let g=0;g<str1.length;g++)
 {
  if(s[g]==f[g])
  c++;
 }
 
 if(c==str1.length)
 return true 
 else return false;
  
}
else
return false
  
}


const x= isAnagram("GOLU", "Golu");
console.log(x);

module.exports = isAnagram;
