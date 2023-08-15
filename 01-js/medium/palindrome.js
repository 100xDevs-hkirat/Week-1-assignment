/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  arr = str.split("");
  //console.log(arr);
  isPal = true;
  if (str.length<2) return true;
  for (var i=0, j=arr.length-1; i<arr.length/2; i++,j--) {
    //console.log(i, j, arr[i], arr[j]);
    while (arr[i] == ' ' || arr[i].toUpperCase() == arr[i].toLowerCase()) i++;
    while (arr[j] == ' '|| arr[j].toUpperCase() == arr[j].toLowerCase()) j--;
    if (i==j) isPal = true;
    if (i>j) isPal = false;
    if (i<arr.length && j>=0) {
      if (arr[i] != arr[j]) {
        isPal = false;
        break;
      }
    }
  }
  return isPal;
}

module.exports = isPalindrome;
