 //Let's suppose we are given a fucntion
 // Shivanshu           Chauhan
 //=> Shivanshu Chauhan

 
 
 
 
 
 
 const e = require('express');
const fs = require('fs');




 function clean(data){
  let ans = data.split(" ");
  //  console.log(ans);
  let ansArray = [];
  for(let i=0;i<ans.length;i++){
    if(ans[i].length ===0){

    }
    else{
      ansArray.push(ans[i]);
    }
  }
  let ansStr=ansArray.join(" ");
  console.log(ansArray);
  console.log(ansStr);
 }



 function fileWritee(err){
  console.log("done");


 }




function fileRead(err,data){
  if(err){
    console.error("Error Here");
    return;
  }

  let cleanedData = clean(data);
  fs.writeFile('/Users/shivanshuchauhan/Desktop/Week-1-assignment/02-async-js/easy/hi.txt','utf8',cleanedData,fileWritee);

}

 

 fs.readFile('/Users/shivanshuchauhan/Desktop/Week-1-assignment/02-async-js/easy/hi.txt','utf-8', fileRead);