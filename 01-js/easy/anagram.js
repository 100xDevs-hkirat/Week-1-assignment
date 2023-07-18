/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let st1 = str1.toLowerCase().split(``)
  let st2 = str2.toLowerCase().split(``)
          st1.sort();
          st2.sort();
    let j = 0;
    if(st1.length == st2.length)
    {
      for(let  i = 0 ; i < st1.length ; i++)
        {
          if(st1[i] != st2[i])
          {
            return false
            break;
          }
          else
          {
            j++
          }
        }
      }
    else
    {
      return false
    }
    if(j==st1.length)
    {
      return true
    }
}
isAnagram('School MASTER', 'The ClassROOM')
module.exports = isAnagram;
