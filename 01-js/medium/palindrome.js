/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
 isPalindrome = function(s) {
    let array=[];
    for(let a=0;a<s.length;a++){
        if((s.charAt(a)>='a' && s.charAt(a)<='z') || (s.charAt(a)>='A' && s.charAt(a)<='Z') ||(s.charAt(a)>='0' && s.charAt(a)<='9')){
            array.push(s.charAt(a));
        }
    }
     let s_original=array.join('');
    let reverse_array=array.reverse();
    let s_reversed=reverse_array.join('');
 let a=s_reversed.toLowerCase();
    let b=s_original.toLowerCase();
if(a==b){
    return true;
}
else{
    return false;
}
}

module.exports = isPalindrome;
