const fs = require('fs');



function printFile(err,data){
  if(err){
    console.error("error");
    return;
  }
  console.log(data);
}

fs.readFile('/Users/shivanshuchauhan/Desktop/Week-1-assignment/02-async-js/easy/hi.txt','utf-8',printFile);
