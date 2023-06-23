/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  } else{
    // convert the string in array 
    let arr1 = str1.split('') .sort();
    let arr2 = str2.split('').sort();
    for( var i = 0; i< str1.length ; i++){
       if (arr1[i] == arr2[i]){
          return true;
      }
    }
    return false;

  }
  

}

 var ans = isAnagram( 'vidya' , 'idvya');
 console.log(ans);




module.exports = isAnagram;
