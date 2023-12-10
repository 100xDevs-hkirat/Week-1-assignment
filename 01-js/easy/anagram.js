/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/


//  var isAnagram = function(s, t) {
//   if(s.length !== t.length){
//       return false;
//   }

//   var freq = new Array(26).fill(0);

//   for(var i=0;i< s.length; i++){
//       freq[s.charCodeAt(i)- 'a'.charCodeAt(0)]++;
//       freq[t.charCodeAt(i)- 'a'.charCodeAt(0)]--;
//   }

//   for(var i =0;i<freq.length;i++){
//       if(freq[i]!=0){

//     return false;
//       }
//   }
//   return true;
// };


// let s='shivi';
// let t='vishi';

// let ok =isAnagram(s,t);

// console.log(ok);


//Code by shiv
//Appraoch 2
//String Anagram
// 'hello' --> 'llheo'

//condition 1
//length check for both strings

//condition
//String 'hello' 
//{h:1, e:1, l:2, o:1}

function isAnagram(string1,string2){
  if(string1.length != string2.length){
   return false;
  }
  let counter = {};
  for(let letter of string1){
   counter[letter]=(counter[letter] || 0) + 1; //without or it gives undefined to handle that we use || 0;
   // console.log(counter[letter]); 
   //This function is to count the number of letters
  }
 
 
 //  console.log(counter);
 //uptill here we have learnt to count the number of arrays
 
 
   for(let items of string2){
     if(!counter[items]){
       return false;
     }
     counter[items]--;
   }
   return true;
 
 }
 
 
 const ok =isAnagram('hello','llheo');
 console.log('The checkAnagram result is:',ok);
 
