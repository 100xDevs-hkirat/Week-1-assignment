/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function create_map(stri){
  const mp = new Map();
 for(let i=0; i<stri.length;i++){
  let c= stri[i];
  if(mp.has(c)){
    mp.set(c,mp.get(c)+1);
  }
  else{
    mp.set(c,1);
  }
 }
  return mp
}
function are_maps_equal(mp1,mp2){
  if(mp1.length != mp2.length){
    return false;
  }
  for(let [key,val] of mp1){
    if(!mp2.has(key) || mp2.get(key) != val){
      return false;
    }
  }
  return true;
}
function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
  const mp1 = create_map(str1.toLowerCase())
  const mp2 = create_map(str2.toLowerCase())
  // console.log(mp1)
  // console.log(mp2)
  const isAnagram=are_maps_equal(mp1,mp2)
  return isAnagram;
}
//console.log(isAnagram("Kccbbial","likcbacb"))
module.exports = isAnagram;
