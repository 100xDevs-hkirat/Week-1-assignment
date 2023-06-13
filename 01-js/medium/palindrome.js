/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/


function removeSpecialChars(str) {
  for (let i of str) {
    if (!(i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122)) {
      str = str.replace(i,"");
    }
  }
  return str;
}



function isPalindrome(str) {
  // str = str.toLowerCase();
  // var reverserstr = '';

  // for (var i = str.length - 1; i >= 0; i--) {
  //   // console.log(str[i]);
  //   // reverserstr= reverserstr.concat(str[i]);

  //   reverserstr += str[i];
  // }

  // for (var i = 0; i < str.length; i++) {
  //   if (str[i] !== reverserstr[i]) {
  //     return false;
  //   }
  // }
  // return true;

  str = str.toLocaleLowerCase();
  str = removeSpecialChars(str);
  console.log(str);

  var len = str.length;
  if (len === 1) {
    return true;
  }

  for (var i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] != str[len - i - 1]) {
      return false
    }
  }
  return true;
}


isPalindrome("Able, was I ere I saw Elba!");
module.exports = isPalindrome;
