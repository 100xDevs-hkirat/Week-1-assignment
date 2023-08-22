     let n1 = str1.length;
     let n2 = str2.length;
  if(n1!=n2){
    return false;
  }
  str1.sort();
  str2.sort();
  for(var i=0;i<n1;i++){
    if(str1[i]!=str2[i]){
      return false;
    }
  }
  return true;
