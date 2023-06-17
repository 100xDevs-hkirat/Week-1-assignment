/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(s, t) {
    if(s.length!==t.length)return false;

    const arr={};

    for (let i = 0; i < s.length; i++) {
        let c=s[i];
        arr[c]=(arr[c]||0)+1;
    }
    console.log(arr);
    for(let i=0;i<t.length;i++){
        let c=t[i];
        arr[c]=(arr[c]||0)-1;
    }
    console.log(arr);
    for(let key in arr){
        if(arr[key]!== 0)return false;
        // console.log(arr[i]);
    }

    return true;
}

module.exports = isAnagram;
