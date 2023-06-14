/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/



function isAnagram(str1, str2) {
var a=str1.length;
var b=str2.length;
	if(a !=b){
          return false;
	}
	else{
	var r=str1.split('').sort().join('');
	var y=str2.split('').sort().join('');
	}

	if(r===y){
	return true;}
	}
	else{
	return false;
	}

module.exports = isAnagram;
