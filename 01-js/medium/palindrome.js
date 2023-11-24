function isPalindrome(str) {
    let str1=str.toLowerCase();
    let str2="";
    for(i=str1.length-1; i>=0; i--)
    {
        str2= str2+ str1[i];
    }

    if(str2==str1){
        
        return true;
    }
    else{
        return false;
    }
    
  }
  
  /*if(isPalindrome("Pop")){
    console.log("yes");
  }
  else{
    console.log("No")
  }*/
  module.exports = isPalindrome;

