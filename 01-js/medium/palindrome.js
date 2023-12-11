// How to you check if a given string is Palidrome 


// dad -> dad -> true
// level -> level -> true
// ajay -> yaja -> false



//appraoch 1: solving this by predefined functions
/*
function isPal(str){
  let reverse = str.split("").reverse().join("");
  // console.log(reverse); //string is reversed. 

  return str.toLowerCase() === reverse.toLowerCase();
  
}


console.log(isPal("level"));

*/


//Approach 2: Without any inbuilt functions
// We can use two pointers for this approach

function isPal2(str){

  let newStr = str.toLowerCase();

  let left=0;
  let right=newStr.length - 1;


  while(left<right){

    if(newStr[left] !== newStr[right])
      return false;

    left++;
    right--;
  
  }
  return true;



}

console.log(isPal2("strrts"));

