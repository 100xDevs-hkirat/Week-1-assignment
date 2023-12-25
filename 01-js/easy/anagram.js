

function isAnagram(str1, str2) {

  // Sort the characters in both strings and compare them
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

    if(str1===str2){
      console.log("True")
    }
    else{
      console.log("False")
    }
}


