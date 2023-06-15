/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  function strtoarr(str){
        var a=[];
        for(var i=0;i<str1.length;i++){
            a[i]=str1[i];
        }
        return a;
    }
    str1=str1.toLowerCase()
    str2=str2.toLowerCase()
    var n1= str1.length;
    var n2= str2.length;
    if(n1!=n2){
        return false;
    }
    var s1=strtoarr(str1);
    var s2=strtoarr(str2)
    s1.sort();
    s2.sort();
    st=true;
    for(var i=0;i<n1;i++){
        if(s1[i]!=s2[i]){
            st=false;
        }
    }
    return st;

}

module.exports = isAnagram;
