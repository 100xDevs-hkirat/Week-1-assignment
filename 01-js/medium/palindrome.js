/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindromehelperSentence(str1) {
    
    
  var reverseArray = str1.split("").reverse().join("");
  var new_string = reverseArray.split(" ").join("")
  var myArray1 = new_string.toUpperCase().replace(/[^a-zA-Z0-9 ]/g, '');
  const newup = str1.toUpperCase().split(" ").join("").replace(/[^a-zA-Z0-9 ]/g, '');
  console.log(myArray1);
  console.log(newup)
  if(newup == myArray1){
      return true;
  }
  return false; 
}


function isPalindrome(str){
    let ans = isPalindromehelperSentence(str);
    return ans;
}

module.exports = isPalindrome;
