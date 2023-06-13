function isPalindrome(str) {
  str=str.toLowerCase();
  var final=str.split('').reverse().join('');
  if(final===str){
    return true 
  }
  else{
    return false
  }
  
}



module.exports = isPalindrome;
