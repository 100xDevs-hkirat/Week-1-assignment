/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if(str.length===1){
    return true
  }
  str=str.toLowerCase().replaceAll(' ',"").replaceAll(",","").replaceAll('?',"").replaceAll('.','').replaceAll('!','')
  // console.log("string is ",str)
  if(str.length%2==0){
    return str.substring(0,str.length/2).split("").reverse().join("")==str.substring(str.length/2)
  }else{
    return str.substring(0,str.length/2).split("").reverse().join("")==str.substring(str.length/2 +1)
  }
}

module.exports = isPalindrome;
