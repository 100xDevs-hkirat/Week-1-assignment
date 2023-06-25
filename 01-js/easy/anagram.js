/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// METHOD 01 :
// function isAnagram(str1, str2) {
//   if (str1.length === str2.length) {
//     const str1SmallCase = str1.toLowerCase();
//     const str2SmallCase = str2.toLowerCase();

//     const str1RemoveSpace = str1SmallCase.replace(/\s/g, "");
//     const str1Array = str1RemoveSpace.split("");
//     let f = 0;
//     for (let el of str1Array) {
//       if (!str2SmallCase.includes(el)) {
//         f = 1;
//       }
//     }
//     const result = f === 1 ? false : true;
//     return result;
//   }
//   return false;
// }
// module.exports = isAnagram;

//METHOD 02:

function isAnagram(str1, str2) {
  const finalStr1 = str1
    .toLowerCase()
    .replace(/\s/g, "")
    .split("")
    .sort()
    .join("");
  const finalStr2 = str2
    .toLowerCase()
    .replace(/\s/g, "")
    .split("")
    .sort()
    .join("");
  // Not using -> .replace(" ", "") bcz it won't remove space from end of string '100xdev cohort '

  return finalStr1 === finalStr2 ? true : false;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("Debit Card", "Bad Credit"));

module.exports = isAnagram;
