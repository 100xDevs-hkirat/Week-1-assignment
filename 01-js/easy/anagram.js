/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

    //* Convert to lower case: 
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    //* Check the number of letters in str1 and str2: 
    if(str1.length !== str2.length){
      return false; 
    }

    //* Split, sort and then join them again:
    str1 = str1.split('').sort().join()
    str2 = str2.split('').sort().join()

    //* Compare and return: 
    if(str1 === str2){
      return true;
    }else{
      return false; 
    }
}

const testCase1 = isAnagram("car", "rac")
console.log(testCase1);

module.exports = isAnagram;

