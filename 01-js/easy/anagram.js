/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function isAnagram(str1, str2) {
    let S1 = str1.split('');
    let S2 = str2.split('');
    if (S1.length !== S2.length)
    { return false ; }
    else {
        let n = S1.length ;
        for ( i = 0; i < n ; i++)
        {
           for ( j= 0; j <n ; j++)
           {
                if ( S1[i] == S2[j])
               { return true;
               }
               break;
            }

    }
    }
}

module.exports = isAnagram;
