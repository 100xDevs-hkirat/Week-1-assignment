/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

//convert all to lowercase man avoid shit that's better

function isPalindrome(str) {
  const res = str.toLowerCase().split(' ').filter(x=>x.length!==0).join('')
  const ans = res.replace(/[^a-zA-Z0-9\s]/g, "")
  // console.log(ans)
  let n=ans.length
  for(let i=0;i<ans.length;i++){
    if(ans[i] !== ans[n-i-1]){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('Eva, can I see bees in a cave?'))
module.exports = isPalindrome;
