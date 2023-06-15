/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
    str = str.toLowerCase();
    let filteredString = "";
    for(let i=0;i<str.length;i++){
        if(str.charAt(i).charCodeAt(0)>=97 && str.charAt(i).charCodeAt(0)<=122)
            filteredString+=str.charAt(i).toString();
    }

    let i = 0;
    let j = filteredString.length-1;
    while (i < j) {
        if (filteredString.charAt(i) !== filteredString.charAt(j))
            return false;
        i++;
        j--;
    }
    return true;
}

module.exports = isPalindrome;
